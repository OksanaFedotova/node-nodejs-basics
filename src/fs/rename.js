import fs from 'fs';
import path from 'path';
import __dirname from './__dirname.js';
import { checkAccess, throwError } from '../utils.js';

const rename = async () => {
  const pathWrongName = path.join(__dirname, 'files/wrongFilename.txt');
  const pathProperName = path.join(__dirname, 'files/properFilename.md');
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