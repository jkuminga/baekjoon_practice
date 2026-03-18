/* ==============================================================================
▶︎ 28279 - 덱2
https://www.acmicpc.net/problem/28279

▶︎ 개요
- 덱을 구현한 뒤, 입력으로 주어지는 명령들을 처리하는 프로그램을 작성하라.

명령
1) 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
2) 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
3) 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
4) 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
5) 5: 덱에 들어있는 정수의 개수를 출력한다.
6) 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
7) 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
8) 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

▶︎ 입력
첫째 줄에 명령의 수 N이 주어진다.[1, 1,000,000]
둘째 줄부터 N개의 줄에 명령이 하나씩 주어진다.

▶︎ 출력
출력을 요구하는 명령이 주어질 때 마다 명령의 결과를 한줄에 하나씩 출력한다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(inputs[0]);

const deque = new Array(20000);
let front = 10000;
let rear = 10000;

const answer = [];

for(var i = 1; i <= N; i++){
  const [command, value] = inputs[i].split(' ').map(Number);

  if(command === 1){
    // front는 현재 아이템이 들어있는 곳을 가리키고 있음
    // rear는 현재 아이템이 들어있는 곳의 하나 앞쪽을 가리키고 있음
    front--;
    deque[front] = value;
  }else if(command === 2){
    deque[rear] = value;
    rear++;
  }else if(command === 3){
    if(front === rear) answer.push(-1);
    else answer.push(deque[front++]);
  }else if(command === 4){
    if(front === rear) answer.push(-1);
    else{
      rear--;
      answer.push(deque[rear]);
    }
  }else if(command === 5){
    answer.push(rear - front);
  }else if(command === 6){
    answer.push((rear === front) ? 1 : 0);
  }else if(command === 7){
    answer.push((rear === front) ? -1 : deque[front]);
  }else if(command === 8){
    answer.push((rear === front) ? -1 : deque[rear - 1]);
  }
}

console.log(answer.join('\n'));