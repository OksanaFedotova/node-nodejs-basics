import os from 'node:os'
import { Worker } from 'node:worker_threads';
import { getPath } from '../utils.js';
const performCalculations = async () => {
  const cpuNum = os.cpus().length;
    Promise.allSettled(
    Array(cpuNum).fill().map((_, i) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(getPath(import.meta.url, 'worker.js'), {workerData: 10 + i});
        worker
          .on('message', resolve)
          .on('error', reject);
      });    
    })
  )
  .then((workers) => { 
    const res = workers.map(({status, value}) => {
       status === 'fulfilled' ? status = 'resolved' : status = 'error';
       const data = status === 'resolved' ? value : null;
       return {status, data}
    })
    console.log(res);
  })
};

await performCalculations();
