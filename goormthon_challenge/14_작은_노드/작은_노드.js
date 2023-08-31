const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N, M, K;
const edges = [];
let isVisited;

rl.on('line', (line) => {
  input.push(line);
  [N, M, K] = input[0].split(' ').map(Number);
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let count = 1;
  for (let i = 1; i < M + 1; i++) {
    edges.push(input[i].split(' ').map(Number));
  }
  isVisited = new Array(N).fill(false);

  let currentNode = K;
  isVisited[K - 1] = true;
  while (true) {
    const Nextnode = edges.reduce((acc, edge) => {
      if (edge[0] === currentNode && isVisited[edge[1] - 1] === false) {
        acc = edge[1] < acc ? edge[1] : acc;
      }
      if (edge[1] === currentNode && isVisited[edge[0] - 1] === false) {
        acc = edge[0] < acc ? edge[0] : acc;
      }
      return acc;
    }, Infinity);

    if (Nextnode === Infinity) {
      break;
    } else {
      currentNode = Nextnode;
      isVisited[currentNode - 1] = true;
      count++;
    }
  }

  console.log(count, currentNode);
});
