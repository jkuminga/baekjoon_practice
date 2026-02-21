/* ==============================================================================
▶︎ 10814 - 나이순 정렬

▶︎ 개요
- 나이와 이름이 가입한 순서대로 주어질 때 나이는 증가하는 순으로, 나이가 같으면 가입한 사람이 먼저 오는 순서로 정렬

▶︎ 입력
- 첫 줄에 회원 수 N이 주어진다.(N <= 500,000)
- 두 번째 줄부터 N명의 회원의 나이와 이름이 공백으로 구분되어 주어진다.
  (1<= 나이 <= 200, 이름은 알파벳 대소문자)
 
▶︎ 출력
- 첫 줄부터 n개의 줄에 걸쳐 온라인 저지 회원을 나이순, 나이가 같으면 가입한 순으로 한 줄에 한명씩 출력

▶︎ 아이디어
- 안정성이 보장되는 정렬(병합, 버블, 삽입) 사용하자.

▶︎ 개선방향
============================================================================== */

const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const n = Number(data[0]);
const numbers = data.slice(1).map(Number);

const numbersToSet = new Set(numbers);
let uniqueNumbers = [...numbersToSet];
uniqueNumbers.sort((a,b) => a-b);

const valueToIdx = new Map();
for (let i = 0; i < uniqueNumbers.length; i++) {
  valueToIdx.set(uniqueNumbers[i], i);
}


const result = new Array(n);

for(var i = 0; i < n ; i++){
  result[i] = valueToIdx.get(numbers[i]);
}

process.stdout.write(result.join(' '));
