import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const output=path.join(root,'docs');
const locales=JSON.parse(fs.readFileSync(path.join(root,'source/ui.json'),'utf8'));
for(const lang of Object.keys(locales)){
 const file=path.join(output,lang==='en'?'index.html':`${lang}/index.html`);
 const html=fs.readFileSync(file,'utf8');
 assert.equal((html.match(/<article class="project"/g)||[]).length,20,`${lang}: project count`);
 assert.ok(html.includes(`<html lang="${lang}">`),`${lang}: language`);
 assert.ok(!html.includes('\uFFFD'),`${lang}: text encoding`);
 if(lang==='en')assert.equal((html.match(/<details><summary>/g)||[]).length,20,'English project detail count');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length,`${lang}: unique IDs`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const target=match[1];
  if(target.startsWith('#')){assert.ok(ids.includes(target.slice(1)),`${lang}: ${target}`);continue;}
  if(!target.startsWith('/'))continue;
  const location=path.join(output,target.endsWith('/')?`${target}index.html`:target);
  assert.ok(fs.existsSync(location),`${lang}: missing ${target}`);
 }
 console.log(`${lang}: 20 projects, language/asset/anchor links, encoding and IDs pass`);
}
console.log('All static-site checks passed.');
