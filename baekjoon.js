/* ==============================================================================
▶︎ 2485 - 가로수

▶︎ 개요
직선의 도로 위에 임의의 간격으로 가로수가 심어져있다. 가로수 들이 모두 같은 간격을 가지도록
추가로 가로수를 심고자 한다. 가로수들의 간격이 갖도록 하기 위해 심어야 하는 가로수의 최소 양을 구하자.

▶︎ 입력
- 첫번째 줄에 이미 심어져 있는 가로수의 개수 N이 주어진다.[3, 100,000]
- 두번째 줄부터 N개의 줄만큼 심어져 있는 가로수의 위치를 나타내는 정수가 주어진다.[1,000,000,000]
  (가로수는 기준점으로 부터 가까운 순으로 주어진다.)

▶︎ 출력
- 가로수의 최소수를 출력하자

▶︎ 아이디어
- 가로수 간의 간격을 모두 구하자. 이 간격을 동일하게 나눌 수 있는 최소 간격 G를 구하자.
   -> 이 때의 G는 모든 간격들 간의 최대 공약수와 동일하다.

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = data[0];
const trees = data.slice(1,);

// console.log(`Tree count : ${N}`);
// console.log(`Tree coordinate : ${trees}`)

// 가로수 사이 간격 모두 구하기
const distances = [];
for(let i = 1; i < N ; i++) distances.push(trees[i] - trees[i-1]);

// console.log(`every distances are ${distances}`);

// 최대공약수 구하는 함수
function gcd(a,b){
  while(b !== 0){
    t = a % b;
    a = b;
    b = t
  }
  return a;
}

// 거리 간 최소 공약수 구하기
let G = distances[0];
for(let i = 1; i < distances.length ; i++){
  // console.log(`G between ${G} and ${distances[i]} is ${gcd(G, distances[i])}`)
  G = gcd(G, distances[i]);
}

// console.log(G);

// 심어야 하는 나무 구하기
let ans = 0;
for(let i = 0 ; i < distances.length ; i++){
  ans += (distances[i] / G) - 1;
}

console.log(ans);