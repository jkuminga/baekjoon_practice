/* ==============================================================================
▶︎ 10816 - 숫자 카드 2

▶︎ 개요
가지고 있는 N개의 숫자 카드에 대해서, M개의 카드가 주어 졌을 때, 주어진 카드 중 몇 개의 카드를 들고 있는지 구하는 프로그램 작성

▶︎ 입력
- 첫째 줄에는 가지고 있는 카드의 개수 N이 주어짐[1, 500,000]
- 둘째 줄에는 카드에 적혀있는 정수가 주어짐[-10,000,000, 10,000,000]
- 셋째 줄에는 M이 주어짐[1, 500,000]
- 넷째 주에는 가지고 있는 카드인 지 구해야 할 M개의 정수가 주어짐[-10,000,000, 10,000,000]

▶︎ 출력
- 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 몇 개 가지고 있는지를 공백으로 구분

▶︎ 아이디어
- 숫자 카드 1과 다르게, 똑같은 수의 숫자 카드를 가지고 있을 수 있음

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = data[0];
const myNumbers = data.slice(1, N+1)
const M = data[N+1];
const targetNumbers = data.slice(N+2);

const have = new Map();


for(var myNum of myNumbers) {
  if(have.has(myNum)){
    have.set(myNum, have.get(myNum) + 1);
  }else{
    have.set(myNum, 1);
  }
}

const ans = [];
for(var i = 0; i < M ; i ++){
  if(have.has(targetNumbers[i])) {
    ans.push(have.get(targetNumbers[i]));
  }
  else ans.push(0);
}

console.log(ans.join(' '));