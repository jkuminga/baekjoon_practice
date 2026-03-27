/* ==============================================================================
▶︎ 25192 - 인사성 밝은 곰곰이
https://www.acmicpc.net/problem/25192

▶︎ 개요
오픈 채팅방에는 새로운 사람이 들어온 이후 처음 채팅을 입력하는 사람은 반드시 곰곰티콘으로 인사를 한다.
그 외의 기록은 평범한 채팅이다.

채팅 기록 중 곰곰티콘이 사용된 횟수를 구하자.

▶︎ 입력
- 첫째 줄에는 채팅방의 기록 수를 나타내는 정수 N이 주어진다(1 ~ 100,000)
- 둘째 줄부터 N개의 줄에 걸쳐 새로운 사람의 입장을 나타내는 ENTER, 
  혹은 채팅을 입력한 유저의 닉네임이 문자열로 주어진다.
  (첫번째로 주어지는 문자열은 반드시 ENTER)

▶︎ 출력
곰곰티콘이 사용된 횟수를 출력하시오

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(inputs[0]);
const messages = inputs.slice(1);

const logs = new Set();
let count = 0;

for(let m of messages){
  if(m == 'ENTER') logs.clear();
  else{
    if(!logs.has(m)) {
      logs.add(m);
      count++;
    }
  }
}

console.log(count);