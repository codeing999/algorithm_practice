const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let i = 0;
let N = 200;
let gCoord = { x: 0, y: 0 };
let pCoord = { x: 0, y: 0 };
let board = [];
rl.on('line', (line) => {
  if (i > N + 2) {
    rl.close();
  }
  input = line;
  if (i === 0) {
    N = +input;
  } else if (i === 1) {
    let temp = input.split(' ');
    gCoord.x = +temp[1] - 1;
    gCoord.y = +temp[0] - 1;
  } else if (i === 2) {
    let temp = input.split(' ');
    pCoord.x = +temp[1] - 1;
    pCoord.y = +temp[0] - 1;
  } else if (i > 2 && i <= N + 2) {
    board.push(input.split(' '));
  }
  i++;
});

rl.on('close', () => {
  // console.log(N, typeof N);
  // console.log(gCoord);
  // console.log(pCoord);
  // console.log(board);
  let gPoint = 1;
  let pPoint = 1;
  // let gArray = Array.from(Array(N), () => Array(N).fill(0))
  // let pArray = Array.from(Array(N), () => Array(N).fill(0))
  // gArray[gCoord.y][gCoord.x] = 1;
  // pArray[pCoord.y][pCoord.x] = 1;
  let visitList = [];
  visitList.push(`${gCoord.y},${gCoord.x}`);

  //goorm 플레이
  let flag = true;
  while (flag) {
    let count = +board[gCoord.y][gCoord.x].slice(0, -1);
    let command = board[gCoord.y][gCoord.x].slice(-1);
    let column = gCoord.x;
    let row = gCoord.y;

    for (let i = 0; i < count; i++) {
      if (command === 'U') {
        row = row === 0 ? N - 1 : row - 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          gPoint++;
        }
      } else if (command === 'D') {
        row = row === N - 1 ? 0 : row + 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          gPoint++;
        }
      } else if (command === 'R') {
        column = column === N - 1 ? 0 : column + 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          gPoint++;
        }
      } else if (command === 'L') {
        column = column === 0 ? N - 1 : column - 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          gPoint++;
        }
      }
      if (i === count - 1) {
        gCoord.x = column;
        gCoord.y = row;
      }
    }
  }

  visitList = [];
  visitList.push(`${pCoord.y},${pCoord.x}`);

  //player 플레이
  flag = true;
  while (flag) {
    let count = +board[pCoord.y][pCoord.x].slice(0, -1);
    let command = board[pCoord.y][pCoord.x].slice(-1);
    let column = pCoord.x;
    let row = pCoord.y;
    isDone = false;

    for (let i = 0; i < count; i++) {
      if (command === 'U') {
        row = row === 0 ? N - 1 : row - 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          pPoint++;
        }
      } else if (command === 'D') {
        row = row === N - 1 ? 0 : row + 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          pPoint++;
        }
      } else if (command === 'R') {
        column = column === N - 1 ? 0 : column + 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          pPoint++;
        }
      } else if (command === 'L') {
        column = column === 0 ? N - 1 : column - 1;
        if (visitList.includes(`${row},${column}`)) {
          flag = false;
          break;
        } else {
          visitList.push(`${row},${column}`);
          pPoint++;
        }
      }
      if (i === count - 1) {
        pCoord.x = column;
        pCoord.y = row;
      }
    }
  }

  console.log(gPoint > pPoint ? `goorm ${gPoint}` : `player ${pPoint}`);
  process.exit();
});
