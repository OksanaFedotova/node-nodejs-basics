const parseArgs = () => {
  const args = process.argv.slice(2);
  let res = [];
  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      res.push(`${args[i].replace('--', '')} is ${args[i + 1]}`)
    }
  }
  console.log(res.join(', '))
};

parseArgs();