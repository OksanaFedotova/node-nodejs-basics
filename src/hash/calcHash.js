import fs from 'fs';
import { createHash } from 'node:crypto'
import { getPath } from '../utils.js';

const calculateHash = async () => {
  const pathFile = getPath(import.meta.url, 'files/fileToCalculateHashFor.txt');
  const content = await fs.promises.readFile(pathFile);
  console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();