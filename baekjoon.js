/* ==============================================================================
▶︎ 25501 - 재귀의 귀재
https://www.acmicpc.net/problem/25501

▶︎ 개요
팰린드롬 : 앞에서 읽었을 때와 뒤에서 읽었을 때가 같은 문자열
팰린드롬을 판별하는 재귀 함수를 이용하여 어떤 문자열이 팰린드롬인지의 여부와 재귀 함수 호출 횟수를 출력하자.

▶︎ 입력
- 첫째 줄에 테스트케이스의 개수 T가 주어진다.(1 ~ 1,000)
- 둘째 줄부터 T개의 줄에 알파벳 대문자로 구성된 문자열 S가 주어진다.(1 ~ 1 000)

▶︎ 출력
- 각 테스트케이스 마다 함수의 반환값과 recursion 함수의 호출 횟수를 각 줄에 출력

▶︎ 리팩토링 요소
counter를 전역 변수로 사용하는 것이 부적절해 보임
-> recursion의 파라미터로 제공하는 방식으로 변경
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(inputs[0]);
const answers = [];

// 변경사항 : count를 매개변수로 받음
function recursion(char, l, r, count){
  if(l >= r) return [1, count];
  if(char[l] != char[r]) return [0, count];
  
  // recursion 재귀 시 마다 count 를 ++
  return recursion(char, l+1, r-1, count + 1);
}

function isPalindrome(char){
  return recursion(char, 0, char.length - 1, 1);
}

for(let i = 1; i <= T; i++ ){
  const [result, count] = isPalindrome(inputs[i])
  answers.push(`${result} ${count}`)
}
console.log(answers.join('\n'));