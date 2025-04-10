   import fs from 'fs';
   import path from 'path';
   import { fileURLToPath } from 'url';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   // Correct the source and destination directories
   const sourceDir = path.join(__dirname, './src/electron'); // Adjusted path
   const destDir = path.join(__dirname, './dist-electron'); // Adjusted path

   function copyFiles(src, dest) {
     if (!fs.existsSync(dest)) {
       fs.mkdirSync(dest, { recursive: true });
     }

     fs.readdirSync(src).forEach((file) => {
       const srcFile = path.join(src, file);
       const destFile = path.join(dest, file);

       if (fs.lstatSync(srcFile).isDirectory()) {
         copyFiles(srcFile, destFile);
       } else {
         fs.copyFileSync(srcFile, destFile);
       }
     });
   }

   copyFiles(sourceDir, destDir);