import fs from 'fs';
import { checkAccess, throwError, getPath } from '../utils.js';

const read = async () => {
  const pathFile = getPath(import.meta.url, 'files/fileToRead.txt');
  const readFile = async () => {
    try {
      const content = await fs.promises.readFile(pathFile, 'utf8');
      console.log(content);
    } catch (e) {
      throw e;
    }
  }
  await checkAccess(pathFile, throwError, readFile)
};

await read();