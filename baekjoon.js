/* ==============================================================================
▶︎ 2164 - 카드2
https://www.acmicpc.net/problem/2164

▶︎ 개요
1부터 N까지 번호가 붙은 N장의 카드가 1이 제일 위에 있고 순서대로 쌓여있다.
제일 위에 있는 카드는 버리고, 그 뒤 제일 위에 있는 카드를 덱 제일 뒤로 옮긴다.
카드가 한 장 남을 때 까지 동작을 반복한다. 제일 마지막에 남게 되는 카드를 구하시오.

▶︎ 입력
- 첫째 줄에 정수 N(<=500,000)이 주어진다.

▶︎ 출력
- 남게 되는 카드의 번호를 출력한다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

let answer;


if(N === 1){
  answer = 1;
}else if(N === 2 || N === 3){
  answer = 2;
}else{
  const queue = [];
  let front = 0;
  let rear = 0;
  
  for(let i = 1; i <= Math.floor(N / 2); i++){
    queue.push(2*i);
    rear++;
  }
  
  if(N % 2 !== 0) {
    queue[rear] = queue[front]
    rear++; front++;
  }

  while(true){
    front++;
    if(rear - front === 1) break;

    queue[rear] = queue[front]
    rear++; front++;
    // console.log(`queue : ${queue} front / rear :  ${front}/ ${rear}`);
  }

  answer = queue[rear-1]
}

console.log(answer);

