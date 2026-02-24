/* ==============================================================================
▶︎ 1269 - 대칭 차집합

▶︎ 개요
자연수를 원소로 갖는 공집합이 아닌 집합 A,B가 주어질 때 두 집합의 대칭 차집합을 구하라
(대칭 차집합 = (A-B) U (B-A))

▶︎ 입력
- 첫째 줄에 집합 A의 원소 개수와 B의 원소 개수가 주어진다.[1, 200,000]
- 둘째 줄에 A의 원소가 공백으로 구분되어 주어진다.(각 원소는 100,000,000 이하의 자연수)
- 셋째 줄에 B의 원소가 공백으로 구분되어 주어진다.

▶︎ 출력
- 대칭 차집합의 원소의 개수를 출력한다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const Asize = data[0];
const Bsize = data[1];
const setA = data.slice(2, Asize+2);
const setB = data.slice(Asize+2);
let AdiffB = new Set(data.slice(2, Asize+2));
let BdiffA = new Set(data.slice(Asize+2));


for(var i = 0 ; i < Bsize ;  i++){
  if(AdiffB.has(setB[i])) AdiffB.delete(setB[i])
}

for(var i = 0 ; i < Asize ; i++){
  if(BdiffA.has(setA[i])) BdiffA.delete(setA[i]);
}

const union = new Set([...AdiffB, ...BdiffA]);
console.log(union.size);


