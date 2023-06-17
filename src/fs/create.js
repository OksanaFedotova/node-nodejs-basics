import fs from 'fs';
import { checkAccess, getPath, throwError } from '../utils.js';

const create = async () => {
  const pathFile = getPath(import.meta.url, 'files/fresh.txt');
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