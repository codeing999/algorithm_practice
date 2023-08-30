const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N;
rl.on('line', (line) => {
  input.push(line);
  N = +input[0];
  if (input.length === N + 1) {
    rl.close();
  }
});

function checkNeighbor(town, isVisited, i, j) {
  isVisited[i][j] = 1;

  if (i === 0) {
    if (town[i + 1][j] === 1 && isVisited[i + 1][j] === 0)
      checkNeighbor(town, isVisited, i + 1, j);
  } else if (i === town.length - 1) {
    if (town[i - 1][j] === 1 && isVisited[i - 1][j] === 0)
      checkNeighbor(town, isVisited, i - 1, j);
  } else {
    if (town[i + 1][j] === 1 && isVisited[i + 1][j] === 0) {
      checkNeighbor(town, isVisited, i + 1, j);
    }
    if (town[i - 1][j] === 1 && isVisited[i - 1][j] === 0) {
      checkNeighbor(town, isVisited, i - 1, j);
    }
  }
  if (j === 0) {
    if (town[i][j + 1] === 1 && isVisited[i][j + 1] === 0)
      checkNeighbor(town, isVisited, i, j + 1);
  } else if (j === town.length - 1) {
    if (town[i][j - 1] === 1 && isVisited[i][j - 1] === 0)
      checkNeighbor(town, isVisited, i, j - 1);
  } else {
    if (town[i][j + 1] === 1 && isVisited[i][j + 1] === 0) {
      checkNeighbor(town, isVisited, i, j + 1);
    }
    if (town[i][j - 1] === 1 && isVisited[i][j - 1] === 0) {
      checkNeighbor(town, isVisited, i, j - 1);
    }
  }

  return;
}

rl.on('close', () => {
  let town = [];
  let clusterCount = 0;
  for (let i = 1; i < N + 1; i++) {
    town.push(input[i].split(' ').map(Number));
  }

  const isVisited = Array.from(Array(town.length), () =>
    Array(town.length).fill(0)
  );

  for (let i = 0; i < town.length; i++) {
    for (let j = 0; j < town.length; j++) {
      if (town[i][j] === 1 && isVisited[i][j] === 0) {
        checkNeighbor(town, isVisited, i, j);
        clusterCount++;
      }
    }
    //console.log(isVisited)
  }
  console.log(clusterCount);
});
