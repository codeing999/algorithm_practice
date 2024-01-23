//10번 케이스만 시간초과로 실패
// 접근법은 맞는데 디테일이 잘못되서 무한루프도는건지 아예 효율성 더 좋은 다른 방식으로 접근해야 하는지 모르겠음

/**
function solution(number, k) {
  var answer = '';
  const answerLength = number.length - k;
  const array = number.split('');
  let start = 0;
  let end = array.length - 1 - (answerLength - answer.length - 1);
  let tempArray = array.slice(start, end + 1);
  while (answer.length < answerLength) {
    //console.log(start, end, tempArray);
    const max = tempArray.reduce((acc, v, i) => (v > acc ? v : acc), 0);
    answer += max;
    start = start + tempArray.indexOf(max) + 1;
    end = array.length - 1 - (answerLength - answer.length - 1);
    tempArray = array.slice(start, end + 1);
  }
  return answer;
}
*/

// 이렇게 end 변수 부분 두줄 고쳤는데 똑같음.
/**
function solution(number, k) {
  var answer = '';
  const answerLength = number.length - k;
  const array = number.split('');
  let start = 0;
  let end = array.length - answerLength + answer.length;
  let tempArray = array.slice(start, end + 1);
  while (answer.length < answerLength) {
    //console.log(start, end, tempArray);
    const max = tempArray.reduce((acc, v, i) => (v > acc ? v : acc), 0);
    answer += max;
    start = start + tempArray.indexOf(max) + 1;
    end++;
    tempArray = array.slice(start, end + 1);
  }
  return answer;
}
*/

// reduce로 새 배열을 반복해서 만드는게 문제인가 싶어서 인덱스로 접근하게 해봤지만 여전함.
// 단순히 10번케이스일 때 반복횟수가 엄청나서, 시간복잡도 자체가 더 낮은 방식을 찾아야하는 걸지도.
function solution(number, k) {
  var answer = '';
  const answerLength = number.length - k;
  const array = number.split('');
  let start = 0;
  let end = array.length - answerLength + answer.length;
  //let tempArray = array.slice(start, end+1);
  while (answer.length < answerLength) {
    //console.log(start, end, tempArray);
    //const max = array.reduce( (acc, v, i) => v > acc[0] ? [v, i] : acc, [0, 0] );
    let max2 = 0;
    let maxIndex = start;
    for (let i = start; i <= end; i++) {
      if (array[i] > max2) {
        max2 = array[i];
        maxIndex = i;
      }
    }
    answer += max2;
    start = maxIndex + 1;
    end++;
  }
  return answer;
}
