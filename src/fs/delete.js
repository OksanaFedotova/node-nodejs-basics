import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const remove = async () => {
  const pathFile = path.join(__dirname, 'files/fileToRemove.txt');
  
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