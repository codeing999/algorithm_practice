const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let input = [];
let N;
let town = [];
let isVisited;

rl.on('line', (line) => {
  input.push(line);
  N = +input[0];
  if (input.length === N + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let clusterCount = 0;
  for (let i = 1; i < N + 1; i++) {
    town.push(input[i].split(' ').map(Number));
  }

  isVisited = Array.from(Array(N), () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (town[i][j] === 1 && isVisited[i][j] === 0) {
        dfs_recursion(i, j);
        clusterCount++;
      }
    }
  }
  console.log(clusterCount);
});

function dfs_recursion(row, column) {
  isVisited[row][column] = 1;

  for (let k = 0; k < 4; k++) {
    const nextRow = row + dy[k];
    const nextColumn = column + dx[k];
    if (nextRow >= 0 && nextRow < N && nextColumn >= 0 && nextColumn < N) {
      if (
        town[nextRow][nextColumn] === 1 &&
        isVisited[nextRow][nextColumn] === 0
      ) {
        dfs_recursion(nextRow, nextColumn);
      }
    }
  }
  return;
}

function dfs_recursion(town, isVisited, row, column) {
  isVisited[row][column] = 1;

  for (let k = 0; k < 4; k++) {
    const nextRow = row + dy[k];
    const nextColumn = column + dx[k];
    if (nextRow >= 0 && nextRow < N && nextColumn >= 0 && nextColumn < N) {
      if (
        town[nextRow][nextColumn] === 1 &&
        isVisited[nextRow][nextColumn] === 0
      ) {
        dfs_recursion(town, isVisited, nextRow, nextColumn);
      }
    }
  }
  return;
}

//이건 dxdy기법 몰랐을 때 좌우위아래 이동 구현한 함수.
function dfs_recursion2(town, isVisited, i, j) {
  isVisited[i][j] = 1;

  if (i === 0) {
    if (town[i + 1][j] === 1 && isVisited[i + 1][j] === 0)
      dfs_recursion2(town, isVisited, i + 1, j);
  } else if (i === town.length - 1) {
    if (town[i - 1][j] === 1 && isVisited[i - 1][j] === 0)
      dfs_recursion2(town, isVisited, i - 1, j);
  } else {
    if (town[i + 1][j] === 1 && isVisited[i + 1][j] === 0) {
      dfs_recursion2(town, isVisited, i + 1, j);
    }
    if (town[i - 1][j] === 1 && isVisited[i - 1][j] === 0) {
      dfs_recursion2(town, isVisited, i - 1, j);
    }
  }
  if (j === 0) {
    if (town[i][j + 1] === 1 && isVisited[i][j + 1] === 0)
      dfs_recursion2(town, isVisited, i, j + 1);
  } else if (j === town.length - 1) {
    if (town[i][j - 1] === 1 && isVisited[i][j - 1] === 0)
      dfs_recursion2(town, isVisited, i, j - 1);
  } else {
    if (town[i][j + 1] === 1 && isVisited[i][j + 1] === 0) {
      dfs_recursion2(town, isVisited, i, j + 1);
    }
    if (town[i][j - 1] === 1 && isVisited[i][j - 1] === 0) {
      dfs_recursion2(town, isVisited, i, j - 1);
    }
  }

  return;
}
