import fs from 'fs';

export const checkAccess = async (path, callback1, callback2) => {
  await fs.access(path, fs.constants.F_OK, (e) => {
    if (e) {
      callback1();
    } else {
      callback2();
    }
  })
}

export const throwError = () => {
  throw new Error ('FS operation failed');
}