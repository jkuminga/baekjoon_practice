/* ==============================================================================
▶︎ 11866 - 요세푸스 문제 0
https://www.acmicpc.net/problem/11866

▶︎ 개요
1번부터 N번까지 N명의 사람이 원을 이루어 앉아 있고, 양의 정수 K(<=N)이 주어질 때,
순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 과정을 계속해 나간다.
사람들이 제거되는 순서를 (n,k) 요세푸스 순열이라고 한다.
ex) (7,3) = <3, 6, 2, 7, 5, 1, 4>

▶︎ 입력
첫 째 줄에 N,K가 순서대로 주어진다. ( <= 1,000 )

▶︎ 출력
요세푸스 순열을 출력한다

▶︎ 아이디어
- 현재 front에서 k 떨어진 곳 전까지의 모든 요소들을 현재 큐의 뒤에 push
============================================================================== */
const fs = require('fs');
const [N, K] =fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);


const queue = [];
let front = 0; 
let rear = 0;

for(let i = 1; i <= N; i++) queue[rear++] = i;

const answer = [];

while(rear - front >= 1){
  for(var j = 0; j < K - 1; j++){
    queue[rear++] = queue[front++];
  }
  answer.push(queue[front++])
}

console.log(`<${answer.join(', ')}>`)

