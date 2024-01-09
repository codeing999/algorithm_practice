function solution(brown, yellow) {
  let total = brown + yellow;
  let sum = (brown + 4) / 2;
  let y = 3;
  for (y = 3; y < sum; y++) {
    if (y * (sum - y) === total) {
      break;
    }
  }
  return [sum - y, y];
}
