> https://school.programmers.co.kr/learn/courses/30/lessons/12951#

# 풀이 과정
오늘은 2단계 중 정답률이 높은 것으로 간단히 풀어봄.
문제 자체는 간단했는데 한가지를 몰라서 검색 후 알게 되었다.
처음에는
```js
const convertedWord = word[0].toUpperCase() + word.slice(1);
```
이부분을
```js
const word[0] = word[0].toUpperCase()
```
로 해서 첫번째 글자만 따로 변환하려고 했는데 변환이 안되었다.
이게 왜 변환이 안되는 건지 찾아보니
문자열도 객체라서 객체불변성 개념에 의해서 직접 변환이 안되는 것.

객체불변성에 대해 간단히 정리하면
Object와 Array는 불변성이 적용되지 않아서 내용을 변경하면 그것을 참조하는 모든 변수에서 변경되고
String과 Number는 불변성이 적용되어서 내용을 변경해도 원래의 값은 변경되지 않는다.
```js
let str1 = "hello";
let str2 = str1;

str2 = "world";

console.log(str1); // "hello" (변경되지 않음)
console.log(str2); // "world"
```