const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K;
let fruits = [];
rl.on('line', (line) => {
  if (input.length === 0) {
    input.push(line.split(' ').map(Number));
    [N, K] = input[0];
  } else if (input.length > 0 && fruits.length < N) {
    fruits.push(line.split(' ').map(Number));
  }
  if (fruits.length === N) {
    rl.close();
  }
});

rl.on('close', () => {
  let sum = 0;
  fruits = fruits.sort((a, b) => b[1] / b[0] - a[1] / a[0]);

  for (let i = 0; i < N; i++) {
    if (K < 1) {
      break;
    } else if (fruits[i][0] <= K) {
      sum += fruits[i][1];
      K -= fruits[i][0];
    } else {
      sum += (fruits[i][1] / fruits[i][0]) * K;
      K = 0;
    }
  }

  console.log(sum);
});
