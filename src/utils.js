import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const checkAccess = async (path, callback1, callback2) => {
  await fs.access(path, fs.constants.F_OK, (e) => {
    if (e) {
      callback1();
    } else {
      callback2();
    }
  })
}

export const throwError = () => {
  throw new Error ('FS operation failed');
}

export const getPath = (url, fileName) => {
   const __filename = fileURLToPath(url);
   const __dirname = path.dirname(__filename);
   return path.join(__dirname, fileName);
 };
