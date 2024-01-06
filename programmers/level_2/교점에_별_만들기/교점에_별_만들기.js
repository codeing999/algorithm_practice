function solution(line) {
  // 직선이므로 기울기가 같으면 안만나고 다르면 무조건 1번 만남.
  let points = [];
  let answer = [];

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let firstA = line[i][0] * line[j][1];
      let firstC = line[i][2] * line[j][1];
      let secondA = line[j][0] * line[i][1];
      let secondC = line[j][2] * line[i][1];
      //교차점 x좌표 구하기
      let x;
      if (line[i][1] !== 0 && line[j][1] !== 0) {
        x = -(firstC - secondC) / (firstA - secondA);
      } else if (line[i][1] === 0) {
        x = -line[i][2] / line[i][0];
      } else if (line[j][1] === 0) {
        x = -line[j][2] / line[j][0];
      }

      if (x % 1 === 0) {
        //구해진 x가 정수이면 y좌표 구하기
        let y;
        if (line[i][1] === 0) {
          y = -(x * line[j][0] + line[j][2]) / line[j][1];
        } else {
          y = -(x * line[i][0] + line[i][2]) / line[i][1];
        }

        if (y % 1 === 0) {
          let point = zeroAbs([x, y]);
          if (!checkDup(points, point)) {
            points.push(point);
          }
        }
      }
    }
  }

  const maxX = points.reduce((acc, v, i) => {
    return v[0] > acc ? v[0] : acc;
  }, points[0][0]);
  const minX = points.reduce((acc, v, i) => {
    return v[0] < acc ? v[0] : acc;
  }, points[0][0]);
  const maxY = points.reduce((acc, v, i) => {
    return v[1] > acc ? v[1] : acc;
  }, points[0][1]);
  const minY = points.reduce((acc, v, i) => {
    return v[1] < acc ? v[1] : acc;
  }, points[0][1]);

  for (let y = maxY; y >= minY; y--) {
    let line = '';
    for (let x = minX; x <= maxX; x++) {
      if (checkDup(points, [x, y])) {
        line += '*';
      } else {
        line += '.';
      }
    }
    answer.push(line);
  }
  return answer;
}

function checkDup(points, newPoint) {
  return points.some(
    (point) => JSON.stringify(point) === JSON.stringify(newPoint)
  );
}

function zeroAbs(point) {
  if (point[0] === -0) {
    point[0] = 0;
  }
  if (point[1] === -0) {
    point[1] = 0;
  }
  return point;
}
