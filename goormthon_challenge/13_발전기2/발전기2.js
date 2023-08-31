const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N;
let K;
let town = [];
let isVisited;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

rl.on('line', (line) => {
  input.push(line);
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === N + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const types = new Array(31).fill(0); //1~30인덱스 사용. 해당 유형의 단지 수
  let maxType = 0; //가장 단지수 많은 유형
  for (let i = 1; i < N + 1; i++) {
    town.push(input[i].split(' ').map(Number));
  }

  isVisited = Array.from(Array(N), () => Array(N).fill(false));

  for (let row = 0; row < N; row++) {
    for (let column = 0; column < N; column++) {
      if (isVisited[row][column] === false) {
        isVisited[row][column] = true;
        const complex = dfs(row, column);
        //단지면 해당 유형 단지수 1 증가
        if (complex.count >= K) {
          types[complex.type] += 1;

          // 현재 더해진 유형의 단지수가 최대보다 크거나
          // 현재 더해진 유형의 단지수가 최대와 같으면서 유형번호가 더 높으면 최대를 변경.
          if (
            types[complex.type] > types[maxType] ||
            (types[complex.type] === types[maxType] && complex.type > maxType)
          ) {
            maxType = complex.type;
          }
        }
      }
    }
  }

  console.log(maxType);
});

function dfs(row, column) {
  const stack = [[row, column]];
  const type = town[row][column];
  let count = 0;
  while (stack.length > 0) {
    const [currentRow, currentColumn] = stack.pop();
    count++;
    for (let i = 0; i < 4; i++) {
      const nextRow = currentRow + dy[i];
      const nextColumn = currentColumn + dx[i];
      if (
        nextRow >= 0 &&
        nextRow < N &&
        nextColumn >= 0 &&
        nextColumn < N &&
        town[nextRow][nextColumn] === type &&
        isVisited[nextRow][nextColumn] === false
      ) {
        stack.push([nextRow, nextColumn]);
        isVisited[nextRow][nextColumn] = true;
      }
    }
  }
  return { type: type, count: count };
}
