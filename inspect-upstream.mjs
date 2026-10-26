import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const baselinePath=path.join(root,'source/upstream-state.json');
const reportPath=path.join(root,'.maintenance/upstream-review.json');
const readmeDirectory=path.join(root,'.maintenance/readmes');
const owner='lyullee';
const headers={Accept:'application/vnd.github+json','User-Agent':'lyullee-portfolio-maintenance'};
const excluded=new Set(['lyullee','lyullee.github.io']);
const args=process.argv.slice(2);
const sha=text=>createHash('sha256').update(text).digest('hex');
const safeName=name=>/^[A-Za-z0-9_.-]+$/.test(name)&&name!=='.'&&name!=='..';
async function json(url){
 const response=await fetch(url,{headers});
 if(!response.ok)throw new Error(`Public GitHub request failed: HTTP ${response.status} ${url}`);
 return response.json();
}
async function readBaseline(){
 try{return JSON.parse(await fs.readFile(baselinePath,'utf8'));}
 catch(error){if(error.code==='ENOENT')return {schema:'lyullee-portfolio-upstream/v1',repositories:[]};throw error;}
}
function fingerprint(repository){
 const {name,description,defaultBranch,pushedAt,archived,readmePath,readmeSha256}=repository;
 return JSON.stringify({name,description,defaultBranch,pushedAt,archived,readmePath,readmeSha256});
}

if(args[0]==='--accept'){
 const report=JSON.parse(await fs.readFile(reportPath,'utf8'));
 const baseline=await readBaseline();
 if(report.schema!=='lyullee-portfolio-review/v1'||report.current.schema!=='lyullee-portfolio-upstream/v1')throw new Error('Unexpected report schema');
 if(report.baselineSha256!==sha(JSON.stringify(baseline)))throw new Error('Baseline changed after this review; inspect again');
 const catalog=JSON.parse(await fs.readFile(path.join(root,'source/catalog.json'),'utf8'));
 const expected=report.current.repositories.map(item=>item.name).sort();
 const actual=catalog.categories.flat().sort();
 if(JSON.stringify(expected)!==JSON.stringify(actual))throw new Error('Catalog does not cover the current public research repositories');
 for(const item of report.current.repositories){
  if(!safeName(item.name))throw new Error('Unexpected repository name');
  const text=await fs.readFile(path.join(readmeDirectory,`${item.name}.md`),'utf8');
  if(sha(text)!==item.readmeSha256)throw new Error(`Review evidence changed: ${item.name}`);
 }
 await fs.writeFile(baselinePath,JSON.stringify(report.current,null,2)+'\n');
 console.log('Accepted reviewed upstream state. Review the diff, then commit with the corresponding portfolio updates.');
}else if(args.length===0){
 const baseline=await readBaseline();
 const repositories=[];
 for(let page=1;;page++){
  const rows=await json(`https://api.github.com/users/${owner}/repos?per_page=100&page=${page}&type=owner`);
  if(!Array.isArray(rows))throw new Error('Expected a public repository list');
  repositories.push(...rows.filter(item=>item.owner.login.toLowerCase()===owner&&!item.private&&!excluded.has(item.name)));
  if(rows.length<100)break;
 }
 if(!repositories.length)throw new Error('Empty repository inventory; refusing a removal-only update');
 await fs.mkdir(readmeDirectory,{recursive:true});
 const current=[];
 for(let offset=0;offset<repositories.length;offset+=4){
  const batch=await Promise.all(repositories.slice(offset,offset+4).map(async item=>{
   if(!safeName(item.name))throw new Error('Unexpected repository name');
   let readmePath='README.md';
   let response=await fetch(`https://raw.githubusercontent.com/${owner}/${item.name}/${encodeURIComponent(item.default_branch)}/${readmePath}`);
   if(response.status===404){
    const readme=await json(`https://api.github.com/repos/${owner}/${item.name}/readme`);
    if(readme.type!=='file'||typeof readme.path!=='string')throw new Error(`README metadata missing: ${item.name}`);
    readmePath=readme.path;
    response=await fetch(`https://raw.githubusercontent.com/${owner}/${item.name}/${encodeURIComponent(item.default_branch)}/${readmePath.split('/').map(encodeURIComponent).join('/')}`);
   }
   if(!response.ok)throw new Error(`README fetch failed: ${item.name}, HTTP ${response.status}`);
   const text=(await response.text()).replaceAll('\r\n','\n');
   if(!text.trim())throw new Error(`Empty README: ${item.name}`);
   await fs.writeFile(path.join(readmeDirectory,`${item.name}.md`),text);
   return {name:item.name,description:item.description??'',defaultBranch:item.default_branch,pushedAt:item.pushed_at,archived:item.archived,readmePath,readmeSha256:sha(text)};
  }));
  current.push(...batch);
 }
 current.sort((a,b)=>a.name.localeCompare(b.name,'en'));
 const before=new Map(baseline.repositories.map(item=>[item.name,item]));
 const after=new Map(current.map(item=>[item.name,item]));
 const added=current.filter(item=>!before.has(item.name)).map(item=>item.name);
 const removed=baseline.repositories.filter(item=>!after.has(item.name)).map(item=>item.name);
 const changed=current.filter(item=>before.has(item.name)&&fingerprint(item)!==fingerprint(before.get(item.name))).map(item=>({name:item.name,readmeChanged:item.readmeSha256!==before.get(item.name).readmeSha256,metadataOrSourceChanged:true}));
 const report={schema:'lyullee-portfolio-review/v1',checkedAt:new Date().toISOString(),baselineSha256:sha(JSON.stringify(baseline)),added,removed,changed,current:{schema:'lyullee-portfolio-upstream/v1',owner,repositories:current}};
 await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({researchProjects:current.length,added,removed,changed,report:reportPath},null,2));
}else{throw new Error('Usage: node inspect-upstream.mjs [--accept]');}
