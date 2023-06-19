import { fork } from 'node:child_process';
import { getPath } from '../utils.js';

const spawnChildProcess = async (args) => {
  const pathName = getPath(import.meta.url, 'files/script.js');
  const child = fork(pathName, args, {stdio: 'pipe'});
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['-ls']);
