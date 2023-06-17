import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const copy = async () => {
  const pathFiles = path.join(__dirname, 'files');
  const pathCopy = path.join(__dirname, 'files_copy');

  const copyFiles = async () => {
    try {
      const files = await fs.promises.readdir(pathFiles, {withFileTypes: true});
      if (files.length) await fs.promises.mkdir(pathCopy);
      for (const file of files) {
        const filePath = path.join(__dirname, 'files', file.name);
        const copyPath = path.join(__dirname, 'files_copy', file.name);
        await fs.promises.copyFile(filePath, copyPath);
      }
    } catch (e) {
      throw e;
    }
  }
  const checkCopy = async () => {
    await checkAccess(pathCopy, copyFiles, throwError);
  }
  await checkAccess(pathFiles, throwError, checkCopy);
};

await copy();
export default copy;