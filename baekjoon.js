/* ==============================================================================
▶︎ 11478 - 서로 다른 부분 문자열의 개수

▶︎ 개요
문자열 S에 대해서, S의 서로 다른 부분 문자열의 개수를 구하자
(부분 문자열 : S에서 길이가 1보다 큰 연속된 일부분)
(ex. ababc -> a,b,a,b,c,ab,ba,ab,bc,aba,bab,abc,abab,babc,ababc -> 중복 제외 12개)

▶︎ 입력
- 첫째 줄에 문자열 S가 주어짐(소문자, 길이는 1000 이하)

▶︎ 출력
- S의 서로 다른 부분 문자열의 개수 출력.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const s = fs.readFileSync(0, 'utf8').trim();

const ans = [];

for(let i = 1; i <= s.length; i++){
  for(let j = 0; j < s.length - i + 1; j++){
    ans.push(s.slice(j, j+i))
  }
}

console.log(new Set(ans).size);




