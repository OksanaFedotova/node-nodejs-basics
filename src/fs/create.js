import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const create = async () => {
  const pathFile = path.join(__dirname, 'files', 'fresh.txt');
  const createFile = async () => {
    try {
      await fs.promises.writeFile(pathFile, 'I am fresh and young');
    } catch (e) {
      throw e;
    }
  }
  await checkAccess(pathFile, createFile, throwError)
}

await create();