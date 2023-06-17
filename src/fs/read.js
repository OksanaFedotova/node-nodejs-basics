import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const read = async () => {
  const pathFile = path.join(__dirname, 'files/fileToRead.txt');
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