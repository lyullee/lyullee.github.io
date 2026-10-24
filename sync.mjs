import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const base=new URL('./source/',import.meta.url);
const languages=['en','ko','zh-CN','ja','fr','de','es','hi'];
const pages=await Promise.all(languages.map(async lang=>{
 const file=lang==='en'?'README.md':`docs/i18n/README.${lang}.md`;
 const response=await fetch(`https://raw.githubusercontent.com/lyullee/lyullee/main/${file}`);
 if(!response.ok)throw new Error(`Cannot load ${lang}: HTTP ${response.status}`);
 const text=await response.text();
 if(!text.includes('https://github.com/lyullee/'))throw new Error(`Unexpected source for ${lang}`);
 return {lang,text};
}));
for(const {lang,text} of pages)await fs.writeFile(new URL(`${lang}.md`,base),text);
console.log(`Updated ${languages.length} source snapshots. Run npm run build and npm run check, then review and commit the output.`);
