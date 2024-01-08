function solution(relation) {
  var answer = 0;
  const columnLength = relation[0].length;

  //모든 컬럼 조합을 담은 배열 생성
  let combinations = [];
  let tempCombi = Array.from({ length: columnLength }, (_, index) =>
    String(index)
  ); // 이 문법도 처음 써봄
  combinations.push(...tempCombi);
  for (let i = 2; i <= columnLength; i++) {
    tempCombi = makeCombination(tempCombi, i, columnLength);
    combinations.push(...tempCombi);
  }

  while (combinations.length > 0) {
    const c = combinations.shift();
    const indexs = c.split('');
    const values = relation
      .map((v) => {
        let value = '';
        indexs.forEach((index) => {
          value += `,${String(v[index])}`;
        });
        return value;
      })
      .sort();

    // 해당 조합이 후보키인지 체크
    const check = values.reduce((acc, v, i) => {
      if (i === values.length - 1) {
        return acc;
      }
      if (values[i] === values[i + 1]) {
        return false;
      } else {
        return acc;
      }
    }, true);

    // 후보키이면 카운트하고 해당 조합을 포함하는 조합을 제거
    if (check) {
      answer++;
      combinations = combinations.filter((v) => {
        return !c.split('').every((element) => v.split('').includes(element)); //every도 처음 써봄. 하나라도 만족 안하는 게 발견되면 false
      });
    }
  }

  return answer;
}

// 길이 n짜리 조합 만들기
function makeCombination(tempCombi, n, columnLength) {
  const newCombi = [];
  tempCombi.forEach((v) => {
    for (let i = Number(v[v.length - 1]) + 1; i < columnLength; i++) {
      newCombi.push(String(v) + String(i));
    }
  });
  return newCombi;
}
