/** 39%만 통과한 풀이인데,
 * 3중for문으로 모든 후보키조합을 만드는 부분에서 모든 조합을 다 커버하지 못한 점 발견.
 * 일단 코드가 기므로 주석을 달아본다.
 */

function solution(relation) {
  var answer = 0;
  let combinations = [];
  const columnLength = relation[0].length;
  //이 부분이 수정되어야 함
  for (let i = 1; i <= columnLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let str = `${j}`;
      for (let k = j; k < j + i && k < columnLength; k++) {
        if (k > j) {
          str += `${k}`;
        }
      }
      if (str.length === i) {
        combinations.push(str);
      }
    }
  }
  //console.log(combinations);

  //조합길이가 작은 순으로 넣어진 배열에서 왼쪽에서 부터 꺼내고
  // 후보키이면 카운트를 1증가 하면서, 그 조합을 포함한 모든 조합을 다 꺼냄. 그렇게해서 길이가 0일때까지 반복.
  while (combinations.length > 0) {
    const c = combinations.shift();
    const indexs = c.split('');

    //해당 조합컬럼으로 튜플들의 값 합치기
    const values = relation
      .map((v) => {
        let value = '';
        indexs.forEach((index) => {
          value += String(v[index]);
        });
        return value;
      })
      .sort();

    //중복 체크
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

    //console.log(values, c, check);

    if (check) {
      answer++;
      combinations = combinations.filter((v) => !v.includes(c));
    }
  }

  //console.log(combinations);

  return answer;
}
