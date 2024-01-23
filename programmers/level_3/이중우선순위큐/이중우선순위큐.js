// https://school.programmers.co.kr/learn/courses/30/lessons/42628
function solution(operations) {
  let answer = [0, 0];
  const queue = [];
  while (operations.length > 0) {
    const op = operations.shift();
    if (op[0] === 'I') {
      insert(Number(op.split(' ')[1]));
    } else if (op === 'D 1') {
      if (queue.length > 0) {
        queue.shift();
      }
    } else if (op === 'D -1') {
      if (queue.length > 0) {
        queue.pop();
      }
    }
  }

  if (queue.length > 1) {
    answer[0] = queue[0];
    answer[1] = queue[queue.length - 1];
  }

  return answer;

  function insert(num) {
    const index = queue.findIndex((v) => v > num);
    queue.splice(index + 1, 0, num);
  }
}
