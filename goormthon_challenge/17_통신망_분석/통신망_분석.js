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
  const components = [];
  const isVisited = new Array(N + 1).fill(false); //인덱스 1부터 사용.
  const graph = {};

  for (let i = 0; i < M; i++) {
    const [a, b] = bridges[i].split(' ').map(Number);
    if (!graph[a]) {
      graph[a] = [];
    }
    if (!graph[b]) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i < N + 1; i++) {
    if (isVisited[i] === false) {
      isVisited[i] = true;
      components.push(dfs(i, graph, isVisited));
    }
  }

  let maxComponent = components.reduce((acc, component) => {
    if (acc.density < component.density) {
      return component;
    }
    return acc;
  }, components[0]);
  console.log(maxComponent.info.sort((a, b) => a - b).join(' '));
});

function dfs(node, graph, isVisited) {
  let nodeCount = 1;
  let edgeCount = 0;
  let stack = [];
  let info = [];
  stack.push(node);
  info.push(node);
  while (stack.length > 0) {
    let current = stack.pop();
    for (let next of graph[current] || []) {
      edgeCount++;
      if (isVisited[next] === false) {
        stack.push(next);
        info.push(next);
        isVisited[next] = true;
        nodeCount++;
      }
    }
  }
  return { density: edgeCount / 2 / nodeCount, info: info };
}
