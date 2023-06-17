const parseEnv = () => {
  const keys = Object.keys(process.env);
  const result = keys.filter((key) => key.startsWith('RSS_'))
  .map((key) => `${key}=${process.env[key]}`);
  console.log(result.join('; '));
};

parseEnv();