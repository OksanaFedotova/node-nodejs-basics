import fs from 'fs';
import { createGzip } from 'zlib';
import { getPath } from '../utils.js'

const compress = async () => {
  const pathName = getPath(import.meta.url, 'files/fileToCompress.txt');
  const readStream = fs.createReadStream(pathName);
  readStream
    .pipe(createGzip())
    .pipe(fs.createWriteStream(getPath(import.meta.url, 'files/archive.gz')))
};

await compress();