/* ==============================================================================
▶︎ 1934 - 최소공배수

▶︎ 개요
두 자연수 A,B가 주어졌을 때, A와 B의 최소 공배수를 구하는 프로그램을 작성하시오.

▶︎ 입력
- 첫째 줄에 테스트 케이스의 개수 T[1, 1000]이 주어진다.
- 두번째 줄 부터 T개 줄 만큼 A, B가 각 줄에 공백으로 구분되어 주어진다.[1, 45,000]

▶︎ 출력
- 각 줄마다 A,B의 최소공배수를 한 줄에 하나씩 출력한다.

▶︎ 아이디어
1) A,B 중 하나를 i배수로 늘리면서 다른 하나가 그 수와 같이 지는 경우를 찾는다.
2) 최대 공약수를 구해서 A*B를 최대 공약수로 나눈다.
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const T = data[0];

for(var i = 0 ; i < T; i++){
  let [A,B] = [data[2*i + 1], data[2*i + 2]];

  // 약수 먼저 구하기
  let aFactors = [], bFactors = [];
  for(var j = 0; j <= A; j++ ){
    if(A % j === 0) aFactors.push(j);
  }
  for(var j = 0 ; j <=B ; j++){
    if(B % j === 0) bFactors.push(j);
  }

  aFactors.sort((a,b)=> (b-a));
  bFactors = new Set(bFactors.sort((a,b)=> (b-a)));


  let maxFactor;
  // 최대 공약수 구하기
  for(var j = aFactors.length -1; j >= 0; j--){
    if(bFactors.has(aFactors[j])) maxFactor = aFactors[j];
  }


  console.log(A*B / maxFactor);
}