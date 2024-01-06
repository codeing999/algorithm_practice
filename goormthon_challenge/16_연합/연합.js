const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M;
let bridges = [];
rl.on('line', (line) => {
  if (input.length === 0) {
    input.push(line.split(' ').map(Number));
    [N, M] = input[0];
  } else if (bridges.length < M) {
    bridges.push(line);
  }
  if (bridges.length >= M) {
    rl.close();
  }
});

rl.on('close', () => {
  let count = 0;
  const isVisited = new Array(N + 1).fill(false); //인덱스 1부터 사용.
  const graph = {};

  for (let i = 1; i <= N; i++) {
    if (!graph[i]) {
      graph[i] = [];
    }
  }
  for (let i = 0; i < M; i++) {
    const [a, b] = bridges[i].split(' ').map(Number);
    graph[a].push(b);
  }

  for (let i = 1; i < N + 1; i++) {
    if (isVisited[i] === false) {
      isVisited[i] = true;
      dfs(i, graph, isVisited);
      count++;
    }
  }

  console.log(count);
});

function dfs(node, graph, isVisited) {
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    let current = stack.pop();
    for (let next of graph[current]) {
      if (isVisited[next] === false && graph[next].includes(current)) {
        stack.push(next);
        isVisited[next] = true;
      }
    }
  }
}
