/* ==============================================================================
▶︎ 4314 - 다음 소수

▶︎ 개요
정수 n이 주어질 때, n보다 크거나 같은 소수 중 가장 작은 수를 구하기

▶︎ 입력
- 첫번째 줄에 테스트 케이스 의 개수가 주어진다.
- 두번째 줄부터 테스크 케이스 만큼의 정수가 각 줄에 주어진다.[0, 4*10^9]

▶︎ 출력
- 각 테스트 케이스에 대한 최소 소수를 구하자.

▶︎ 아이디어
- 1)뭐가 됬든 n이 소수인지 아닌지는 확인해야 할 거같음
- 2)소수가 아니라면 그 다음 소수를 구하는 방법을 찾기
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = data[0];
const numbers = data.slice(1);

for(var num of numbers){  
  let i = 0;
  
  if(num < 2 ) console.log(2);
  // num이 소수이면 그냥 출력
  else if(isPrime(num)){
    console.log(num);
    console.log(`${num} is prime`);
  }
  // N이 홀수라면 2k씩 더하면서 소수 판별
  else{
    // n이 짝수라면 2k+1씩 더하면서 소수 판별
    if(num % 2 == 0){
      while(!isPrime(num + (2*i + 1))) i++
      console.log(num + (2*i + 1))
    }else{
      // N이 홀수라면 2k씩 더하면서 소수 판별
      while(!isPrime(num + 2*i +2)) i++
      console.log(num + 2*i + 2);
    }
  }
}

function isPrime(number){
  if(number < 2){
    return false;
  }
  
  for(var i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      console.log(`${number} divides with ${i}, so number is not prime`);
      return false;
    }
  }
  return true;
}
