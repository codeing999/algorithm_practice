function solution(s) {
  let answer = [];
  const parsed = JSON.parse(
    s.replace(/{|}/g, function (match) {
      return match === '{' ? '[' : ']';
    })
  ).sort((a, b) => a.length - b.length);
  //console.log(parsed)
  answer.push(parsed[0][0]);

  for (let i = 1; i < parsed.length; i++) {
    const [diff] = parsed[i].filter((v) => !parsed[i - 1].includes(v));
    answer.push(diff);
  }

  return answer;
}
