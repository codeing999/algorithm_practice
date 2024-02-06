// 11:12 ~ 11:25
// 양쪽  {{ 와 }} 제거 후 },{ 기준 split
// ,를 기준으로 영역들을 분류하여 배열을 arr에 저장
// arr을 갯수에 따라 정렬
// 존재하지 않을때만 answer에 push (하나씩 쌓여나감)

function solution(s) {
  var answer = [];
  const arr = [];
  let stack = [];
  s.slice(2, s.length - 2)
    .split('},{') //이 세글자 전체로 split한게 내가 생각하지 못했던 것
    .forEach((v) => {
      arr.push(v.split(',').map((v) => Number(v)));
    });

  arr.sort((a, b) => a.length - b.length);

  // 이 부분도 난 전의 값과 비교했는데 answer에 추가해나갔기 때문에 answer와 비교하면 됐었다.
  arr.forEach((v) => {
    v.forEach((val) => {
      if (!answer.includes(val)) {
        answer.push(val);
      }
    });
  });

  return answer;
}
