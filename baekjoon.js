/* ==============================================================================
▶︎ 4948 - 베르트랑 공준

▶︎ 개요
베르트랑 공준이란 임의의 자연수 n에 대하여 n보다 크고 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용
자연수 n이 주어졌을 때 n보다 크고 2n보다 작거나 같은 소수의 개수를 구하자.

▶︎ 입력
- 입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄에 n이 주어진다.
- 입력의 마지막에는 0이 주어진다.

▶︎ 출력
- 각 케이스에 대해서 n보다 크고 2n보다 작거나 같은 소수의 개수를 출력한다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const ans = [];

for(let num of data){
  if(num === 0) break;
  if(num === 1) ans.push(1);
  else{
    let count = 0;
    const limit = 2*num;
    num ++;
    if(num % 2 === 0) num ++;

    while(num <= limit){
      if(isPrime(num)) count++
      num += 2;
    }

    ans.push(count);
  }
}

function isPrime(num){
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for(let i = 3; i <= limit ; i += 2){
    if(num % i === 0) return false;
  }
  return true;
}

console.log(ans.join('\n'));