import fs from 'fs';
import { Transform, pipeline } from 'stream';
const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });
  pipeline(process.stdin, reverse, process.stdout, (e) => {if (e) console.error(e)})
};

await transform();

