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
1)뭐가 됬든 n이 소수인지 아닌지는 확인해야 할 거같음
2)소수가 아니라면 그 다음 소수를 구하는 방법을 찾기
3)소수 검사 시 sqrt(n)까지만 검사하면 됨 

▶︎ 리펙토링 요소
1) 메인 루프 안에 로직을 줄이고 함수로 만들기(특히 출력을 하나의 함수에서 고정하기)
2) 가독성을 위해 2*i + 1, 2*i + 2 대신 공통된 인덱스 값 사용하기
3) isPrime() 내부에서 sqrt()를 반복하지 않게 변수로 고정하기
4) 매 반복 시 출력하지 말고 배열에 넣은 뒤 한 번에 출력하기

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = data[0];
const numbers = data.slice(1);

function isPrime(number){
  // 리펙토링 1. 조건 추가하기
  if(number <= 2) return false;
  if(number % 2 === 0) return false;

  // 리펙토링 2. sqrt(number) 값 고정해서 사용하기
  const limit = Math.sqrt(number);
  // 리펙토링 3. 짝수는 소수가 아니므로 홀수만 판별하기
  for(var i = 3; i <= limit ; i += 2){
    if(number % i === 0) return false;
  }
  return true;
}

// 리펙토링 4. 다음 소수를 찾는 함수를 따로 만들기
function findNextPrime(num){
  if (num <= 2) return 2;
  // 리펙토링 5. 홀짝 서로 다른 인덱스를 사용하지 말고, 짝수이면 +1 을 해서 거기서 부터 판단하기
  if (num % 2 === 0) num += 1; 

  while(!isPrime(num)){
    num += 2;
  }
  return num;
}

// 리펙토링 6. 정답 저장 후 한 번에 출력하기
const ans = [];
for(const num of numbers){
  ans.push(findNextPrime(num));
}

console.log(ans.join('\n'));