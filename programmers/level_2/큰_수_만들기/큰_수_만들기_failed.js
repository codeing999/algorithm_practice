function findMaxIndex(numberList, length) {
  let maxNumber = '0';
  let indexOfMax = -1;
  for (let i = 0; i < length; i++) {
    if (numberList[i] > maxNumber) {
      maxNumber = numberList[i];
      indexOfMax = i;
    }
  }
  // 예외처리 : 가장 큰 게 '0'인 경우
  if (maxNumber === '0') {
    return 0;
  }
  return indexOfMax;
}

function solution(number, k) {
  const LENGTH_OF_RESULT = number.length - k;
  if (k === 0) {
    return number;
  }
  const numberList = number.split('');
  let resultNumber = [];
  //10자리 중 4개를 제거라 쳤을 때 4+1=5. 앞의 5자리 수에서 가장 큰수 찾기.
  //그 수 바로 뒤부터가 이제 7자리면, 7자리 중 5개가 유효하니까 7-5=2개 제거. 즉, 앞의 2+1개 에서 가장 큰수 찾기.
  //이거를 6(10-4)번 반복하여 6개의 숫자 찾기.

  let subNumberList = numberList.slice();
  let openingCount = numberList.length - k;
  while (resultNumber.length < LENGTH_OF_RESULT) {
    const indexOfMax = findMaxIndex(
      subNumberList,
      subNumberList.length - openingCount + 1
    );

    resultNumber.push(subNumberList[indexOfMax]);
    openingCount--;
    subNumberList = subNumberList.slice(indexOfMax + 1);

    // 예외처리 : 더 이상 계산 필요 없는 경우
    if (openingCount === subNumberList.length) {
      return resultNumber.join('') + subNumberList.join('');
    }
  }
  return resultNumber.join('');
}
