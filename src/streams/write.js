import fs from 'fs';
import { getPath } from '../utils.js';

const write = async () => {
    const filePath = getPath(import.meta.url, 'files/fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();