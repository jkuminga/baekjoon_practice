/* ==============================================================================
▶︎ 26069 - 붙임성 좋은 총총이
https://www.acmicpc.net/problem/26069

▶︎ 개요
무지개 댄스를 추고 있지 않던 사람이 무지개 댄스를 추는 사람을 만나면, 만난 시점 이후로 무지개 댄스를 추게된다.
최초에는 ChongChong만 무지개 댄스를 추고 있다.
사람들의 대면 기록을 보고, 마지막 기록 이후 무지개 댄스를 추는 사람의 수를 출력하라.

▶︎ 입력
- 첫째줄 에는 사람들이 만난 기록의 수 N(1 ~ 1,000)이 주어진다.
- 두번쨰 줄부터 N개의 줄에 걸쳐 만난 사람 Ai와 Bi의 기록이 주어진다. 
  Ai와 Bi는 숫자와 영문 대소문자로 이루어진 최대 길이 20의 문자열이다.
- 총총이의 이름은 ChongChong으로 주어지며, 기록에서 1회 이상 주어진다.
- 사람 이름의 대소문자를 구분한다.
  
▶︎ 출력
무지개 댄스를 추는 사람의 수를 출력하라.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(inputs[0]);
const history = inputs.slice(1);

const dancing = new Set();

// 리펙토링 요소 : ChongChong을 dancing 안에 넣고 시작하기
dancing.add('ChongChong');

for(const h of history){
  const [a,b] = h.split(' ');

  // ChongChong이 dancing 안에 있기 때문에 조건문은 하나로 충분하다.

  if(dancing.has(a) || dancing.has(b)){
    // set은 알아서 중복을 제거하기 때문에 둘다 넣어도 상관없음
    dancing.add(a);
    dancing.add(b);
  }
}

console.log(dancing.size);