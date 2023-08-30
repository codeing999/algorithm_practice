const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let N;
let K;
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
  let town = [];
  let maxComplex = [0, 0]; //유형, 개수
  const types = new Array(31).fill(0); //1~30인덱스 사용. 해당 유형의 단지 수
  for (let i = 1; i < N + 1; i++) {
    town.push(input[i].split(' ').map(Number));
  }

  const isVisited = Array.from(Array(N), () => Array(N).fill(false));

  for (let row = 0; row < N; row++) {
    for (let column = 0; column < N; column++) {
      if (isVisited[row][column] === false) {
        const complex = dfs(town, isVisited, row, column);
        //단지면 해당 유형 단지수 1 증가
        if (complex[1] >= K) {
          types[complex[0]] += 1;

          // 현재 더해진 유형의 단지수가 최대보다 크면 최대를 변경.
          if (types[complex[0]] > maxComplex[1]) {
            maxComplex[0] = complex[0];
            maxComplex[1] = types[complex[0]];
          } else if (
            types[complex[0]] === maxComplex[1] &&
            complex[0] > maxComplex[0]
          ) {
            // 현재 더해진 유형의 단지수가 최대와 같으나 유형번호가 더 높으면 최대를 변경.
            maxComplex[0] = complex[0];
          }
        }
      }
    }
  }
  console.log(maxComplex[0]);
});

function dfs(town, isVisited, row, column) {
  const stack = [[row, column]];
  const type = town[row][column];
  let count = 0;
  while (stack.length > 0) {
    const [currentRow, currentColumn] = stack.pop();
    count++;
    isVisited[currentRow][currentColumn] = true;
    for (let i = 0; i < 4; i++) {
      const nextRow = currentRow + dy[i];
      const nextColumn = currentColumn + dx[i];
      if (nextRow >= 0 && nextRow < N && nextColumn >= 0 && nextColumn < N) {
        if (
          town[nextRow][nextColumn] === type &&
          isVisited[nextRow][nextColumn] === false
        ) {
          stack.push([nextRow, nextColumn]);
        }
      }
    }
  }
  return [type, count];
}
