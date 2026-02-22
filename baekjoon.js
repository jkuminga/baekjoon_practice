/* ==============================================================================
▶︎ 7785 - 회사에 있는 사람

▶︎ 개요
- 모든 사람의 출입카드 시스템 로그를 보고, 현재 회사에 있는 모든 사람을 구하는 프로그램 작성

▶︎ 입력
- 첫째 줄에는 로그의 개수 n이 주어짐[2, 1,000,000]
- 두번째 줄부터 n개의 줄에는 출입 기록이 주어지며, 출입 기록은 "이름 enter" 혹은 "이름 leave" 가 주어진다.(동명이인 x, 대소문자 구분)

▶︎ 출력
- 현재 회사에 있는 사람들의 이름을 사전 순의 역순으로 한 줄에 한 명씩 출력한다.

▶︎ 아이디어
1. Map 을 이용하여 로그를 순회하며 직원의 출퇴근 여부를 저장한다.
2. enter 상태인 직원의 이름만 따로 저장한다.
3. 출력은 String으로 출력한다.

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const logCount = Number(data[0]);

const logs = new Map();
for(var i = 0 ; i < logCount ; i ++) logs.set(data[2*i + 1], data[2*i + 2]);

let out = [];
logs.forEach((value, key)=>{
  if(value === 'enter'){
    out.push(key);
  }
});

out.sort().reverse();

for(var name of out){ console.log(name)}; 