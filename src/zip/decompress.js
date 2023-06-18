import fs from 'fs';
import { createUnzip } from 'zlib';
import { getPath } from '../utils.js'

const decompress = async () => {
  const pathName = getPath(import.meta.url, 'files/archive.gz');
  const readStream = fs.createReadStream(pathName);
  readStream
    .pipe(createUnzip())
    .pipe(fs.createWriteStream(getPath(import.meta.url, 'files/fileToCompress.txt')))
};

await decompress();