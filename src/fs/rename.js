import fs from 'fs';
import { checkAccess, throwError, getPath } from '../utils.js';

const rename = async () => {

  const pathWrongName = getPath(import.meta.url, 'files/wrongFilename.txt');
  const pathProperName = getPath(import.meta.url, 'files/properFilename.md');

  const renameFile = async () => { 
    try {
      await fs.promises.rename(pathWrongName, pathProperName);
    } catch (e) {
      throw e;
    }
  }

  const checkProper = async () => {
    await checkAccess(pathProperName, renameFile, throwError);
  }
  
  await checkAccess(pathWrongName, throwError, checkProper);
};

await rename();