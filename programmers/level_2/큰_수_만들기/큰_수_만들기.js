function solution(number, k) {
  var answer = '';
  const answerLength = number.length - k;
  const array = number;
  let start = 0;
  let end = array.length - answerLength + answer.length;

  while (answer.length < answerLength) {
    let max = 0;
    let maxIndex = start;
    for (let i = start; i <= end; i++) {
      if (array[i] > max) {
        max = array[i];
        maxIndex = i;
      }
      if (max === '9') {
        break;
      }
    }
    answer += max;
    start = maxIndex + 1;
    end++;
    if (start === end) {
      for (let i = start; i < array.length; i++) {
        answer += array[i];
      }
      break;
    }
  }
  return answer;
}
