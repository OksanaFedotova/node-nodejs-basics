import fs from 'fs';
import path from 'path';
import { checkAccess, getPath, throwError } from '../utils.js';

const copy = async () => {
  const pathFiles = getPath(import.meta.url, 'files');
  const pathCopy = getPath(import.meta.url, 'files_copy');

  const copyFiles = async () => {
    try {
      const files = await fs.promises.readdir(pathFiles, {withFileTypes: true});
      if (files.length) await fs.promises.mkdir(pathCopy);
      for (const file of files) {
        const filePath = getPath(import.meta.url, `files/${file.name}`);
        const copyPath = getPath(import.meta.url, `files_copy/${file.name}`);
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