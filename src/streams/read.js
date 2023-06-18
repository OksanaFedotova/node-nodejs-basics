import fs from 'fs';
import { getPath } from '../utils.js'

const read = async () => {
  const pathName = getPath(import.meta.url, 'files/fileToRead.txt');
  const readStream = fs.createReadStream(pathName, 'utf-8');
  readStream.on('data', chunk => process.stdout.write(chunk));
};

await read();