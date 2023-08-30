const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

rl.on('line', (line) => {
  input.push(line);
  N = +input[0];
  if (input.length === N + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let town = [];
  let clusterCount = 0;
  for (let i = 1; i < N + 1; i++) {
    town.push(input[i].split(' ').map(Number));
  }

  const isVisited = Array.from(Array(town.length), () =>
    Array(town.length).fill(false)
  );

  for (let row = 0; row < town.length; row++) {
    for (let column = 0; column < town.length; column++) {
      if (town[row][column] === 1 && isVisited[row][column] === false) {
        dfs(town, isVisited, row, column);
        clusterCount++;
      }
    }
  }
  console.log(clusterCount);
});

function dfs(town, isVisited, row, column) {
  const stack = [[row, column]];
  while (stack.length > 0) {
    const [currentRow, currentColumn] = stack.pop();
    isVisited[currentRow][currentColumn] = true;
    for (let i = 0; i < 4; i++) {
      const nextRow = currentRow + dy[i];
      const nextColumn = currentColumn + dx[i];
      if (nextRow >= 0 && nextRow < N && nextColumn >= 0 && nextColumn < N) {
        if (
          town[nextRow][nextColumn] === 1 &&
          isVisited[nextRow][nextColumn] === false
        ) {
          stack.push([nextRow, nextColumn]);
        }
      }
    }
  }
}
