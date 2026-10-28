import {mkdir,copyFile,cp,readdir,rm} from 'node:fs/promises';
await rm('public',{recursive:true,force:true});await mkdir('public');
for(const file of await readdir('.'))if(/\.(html|css|js)$/.test(file)&&!['runtime-config.js','static-admin.html'].includes(file))await copyFile(file,'public/'+file);
for(const folder of ['admin','assets','cloud'])await cp(folder,'public/'+folder,{recursive:true});
