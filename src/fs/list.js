import fs from 'fs';
import { checkAccess, throwError, getPath } from '../utils.js';

const list = async () => {
  const pathDir = getPath(import.meta.url, 'files');
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