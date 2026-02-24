/* ==============================================================================
▶︎ 1764 - 듣보잡

▶︎ 개요
듣도 못한 사람과 보도 못한 사람들의 명단을 받아서, 듣도 보도 못한 사람을 추출하자.

▶︎ 입력
- 첫째 줄에는 듣도 못한 사람의 수 N과 보도 못한 사람의 수 M이 공백으로 주어진다.[1, 500,000]
- 둘째 줄부터 듣도 못한 사람 N명의 이름이 각 줄에 주어진다.
- 그 다음 줄부터 보도 못한 사람 M명의 이름이 각 줄에 주어진다.

▶︎ 출력
- 첫째 줄부터 듣도 보도 못한 사람의 이름이 사전순으로 주어진다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/)

const N = Number(data[0]);
const M = Number(data[1]);
const unheard = new Set();
for(var i = 0; i < N; i++) unheard.add(data[i+2]);
const unseen = data.slice(N+2);

const ans = [];
for(var u of unseen){
  if(unheard.has(u)) ans.push(u);
}

console.log(ans.length);
console.log(ans.sort().join('\n'));

