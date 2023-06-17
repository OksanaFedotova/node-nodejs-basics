import fs from 'fs';
import path from 'path';
import { checkAccess, throwError } from '../utils.js';

const remove = async () => {
  const pathFile = getPath(import.meta.url, 'files/fileToRemove.txt');
  
  const deleteFile = async () => {
    try {
      fs.promises.unlink(pathFile)
    } catch (e) {
      throw e;
    }
  }
  await checkAccess(pathFile, throwError, deleteFile);
};

await remove();