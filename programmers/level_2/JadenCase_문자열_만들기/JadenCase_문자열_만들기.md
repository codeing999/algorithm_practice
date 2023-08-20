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