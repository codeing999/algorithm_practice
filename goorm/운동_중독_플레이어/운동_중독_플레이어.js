const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
});

rl.on('close', () => {
  const W = +input[0];
  const R = +input[1];

  console.log(Math.floor(W * (1 + R / 30)));
});
