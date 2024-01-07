function solution(n) {
  const stack = [0, 1];
  for (let i = 2; i <= n; i++) {
    stack.push((stack[i - 2] + stack[i - 1]) % 1234567);
  }
  return stack[n];
}

//BigInt 자료형을 사용한 풀이법
function solution2(n) {
  const stack = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    stack.push(stack[i - 2] + stack[i - 1]);
  }
  return stack[n] % 1234567n;
}
