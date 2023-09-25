const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [a, b] = input.split(' ').map(num => parseInt(num));
  console.log(`${a} + ${b} = ${a + b}`);
  rl.close();
});