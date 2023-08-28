const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N;

rl.on('line', (line) => {
  if (input.length === 1) {
    input.push(line.split(' ').map(Number));
  } else {
    input.push(+line);
  }
  N = input[0];
  if (input.length === N + 2) {
    rl.close();
  }
});

rl.on('close', () => {
  let [T, M] = input[1];
  let total = M;
  for (let i = 2; i < N + 2; i++) {
    total += input[i];
  }
  T = (T + Math.trunc(total / 60)) % 24;
  M = total % 60;
  console.log(`${T} ${M}`);
});
