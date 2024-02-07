function solution(progresses, speeds) {
  const answer = [];
  let waitIndex = 0;

  while (waitIndex < progresses.length) {
    let n = 0;
    for (let i = waitIndex; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (i === waitIndex && progresses[i] >= 100) {
        n++;
        waitIndex++;
      }
    }

    if (n) {
      answer.push(n);
    }
  }
  return answer;
}
