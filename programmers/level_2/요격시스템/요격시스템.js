//가장 폭격 많은 좌표 찾기
function getMaxBombedArea(targets) {
  //targets에서의 최대 x좌표만큼의 배열 생성
  let maxX = 0;

  for (let target of targets) {
    if (target[1] > maxX) {
      maxX = target[1];
    }
  }
  //let xList = new Array(maxX).fill(0);
  let xList;
  (xList = []).length = maxX;
  xList.fill(0);

  //xList에 해당 좌표의 폭격 수 값 입력
  for (let target of targets) {
    for (let i = target[0]; i < target[1]; i++) {
      xList[i]++;
    }
  }

  let maxBombedX = 0;
  let indexOfMax = -1;
  for (let i in xList) {
    if (xList[i] > maxBombedX) {
      maxBombedX = xList[i];
      indexOfMax = i;
    }
  }

  return indexOfMax;
}

function solution(targets) {
  let count = 0;
  let beforeLength = targets.length;
  while (targets.length > 0) {
    let area = getMaxBombedArea(targets);

    targets = targets.filter((target) => {
      if (target[0] <= area && target[1] > area) {
        return false;
      } else {
        return true;
      }
    });

    if (targets.length < beforeLength) {
      count++;
    }
    beforeLength = targets.length;
  }

  return count;
}
