const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const N = +input[0];
  const [A, B] = input[1].split(' ');
  let big;
  let small;
  if (+A > +B) {
    big = +A;
    small = +B;
  } else {
    big = +B;
    small = +A;
  }

  let numOfBig = Math.floor(N / big);
  let r = N - big * numOfBig;
  let numOfSmall = 0;

  while (true) {
    if (r % small === 0) {
      numOfSmall = r / small;
      break;
    }
    numOfBig--;
    r += big;
    if (numOfBig < 0) {
      console.log(-1);
      process.exit();
    }
  }

  console.log(numOfBig + numOfSmall);
  process.exit();
});
