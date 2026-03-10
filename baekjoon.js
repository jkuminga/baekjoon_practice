/* ==============================================================================
▶︎ 17103 - 골드바흐 파티션

▶︎ 개요
골드바흐의 추측이란, 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 단 순서만 다른 두 수는 같은 파티션이다.

▶︎ 입력
- 첫 줄에 테스트 케이스의 개수 T이 주어진다.[1, 100]
- 둘째 줄 부터 T번 동안 짝수인 정수 N이 각 줄에 주어진다.[2, 1,000,000]

▶︎ 출력
- 각 케이스의 골드바흐 파티션의 수를 각 줄에 출력한다.

▶︎ 아이디어
- 1부터 sqrt(N)까지의 소수를 구하고 N - 소수가 소수이면 count + 1을 한다.
- GPT 힌트 : 입력된 값들 중 최댓값을 찾아 최댓값 이하의 소수들을 모두 찾아 set 넣는다
  -> 즉 최대값만 isPrime을 쓰고, 나머지는 쓰지 않는다.
============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const T = data[0];
const numbers = data.slice(1);

// GPT 힌트 : 최댓값 기준으로 모든 소수찾아서 Set에 넣어서 사용
const max = Math.max(...numbers);
const primeSet = new Set([2]);
for(var i = 3; i <= max; i += 2){
  if(isPrime(i)) primeSet.add(i);
}

const answers = []


for(const num of numbers){
  let count = 0;
  if(num === 4) answers.push(1);
  else{
    let candidate = 3;
    const limit = num / 2;
    while(candidate <= limit ){
      if(primeSet.has(candidate) && primeSet.has( num - candidate)) count ++;
      candidate += 2;
    }
    answers.push(count);
  }
}


function isPrime(num){
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for(var i = 3; i <= limit; i += 2 ){
    if(num % i === 0) return false;
  }
  return true;
}

console.log(answers.join('\n'));