import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const list = async () => {
  const pathDir = path.join(__dirname, 'files');
  const listFiles = async () => { 
    try {
      const files = await fs.promises.readdir(pathDir, {withFileTypes: true});
      const filesNames = files.map((file) => file.name);
      console.log(filesNames);
    } catch(e) {
      throw e;
    }
  }
  await checkAccess(pathDir, throwError, listFiles);
};

await list();