/* ==============================================================================
▶︎ 1929 - 소수 구하기

▶︎ 개요
M이상 N 이하의 소수를 모두 출력하는 프로그램 만들기

▶︎ 입력
- 첫째 줄에 자연수 M, N이 주어진다.([1, 1,000,000], M이상 N이하의 소수가 하나 이상 존재하는 입력만 제공됨)

▶︎ 출력
- 한 줄에 하나씩, 증가하는 순서대로 소수를 출력

▶︎ 아이디어
1) 소수 판별 함수 생성
2) 다음 소수를 찾는 함수를 생성 - 내부에서 ans에 push
3) join('/n')으로 출력
============================================================================== */

const fs = require('fs');
const [M,N] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const ans = []; // 답안 삽입 대열

let currentNumber = M;
if(currentNumber <= 2) ans.push(2);
if(currentNumber % 2 === 0) currentNumber++;

function isPrime(num){
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  
  const limit = Math.sqrt(num);
  
  for(let i = 3 ; i <= limit ; i++){
    if(num % i === 0) return false;
  }

  return true;
}

while(currentNumber <= N){
  if(isPrime(currentNumber)) ans.push(currentNumber);
  currentNumber += 2;
}

console.log(ans.join('\n'));
