/* ==============================================================================
▶︎ 18258 - 큐2
https://www.acmicpc.net/problem/18258

▶︎ 개요
정수를 조정하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하자.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

▶︎ 입력
- 첫번쨰 줄에는 명령의 수 N이 주어진다(1과 2,000,000 사이의 자연수)
- 두번째 줄부터 명령이 하나씩 주어진다.(입력 정수는 1과 100,000 사이)

▶︎ 출력
- 출력해야하는 명령이 주어질 때 마다 한 줄에 하나씩 출력한다.

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = input[0];

const queue = [];
let front = 0; 
let rear = 0;

const answers = [];

for(let i = 1; i <= N; i ++) {
  let [command, value] = input[i].split(' ');
  value = Number(value);
  console.log(`=== 이번 명령은 ${command} 입니다 ===`);
  if(command === 'push'){
    queue.push(value);
    rear++;
    console.log(`   push 후 스택 : ${queue}  |  front/rear : ${front}/${rear}`);
  }else if(command === 'pop'){
    answers.push((front === rear) ? -1 : queue[front++])
  }else if(command === 'size'){
    answers.push(rear - front);
  }else if(command === 'empty'){
    answers.push((front === rear) ? 1 : 0);
  }else if(command === 'front'){
    answers.push((front === rear) ? -1 : queue[front]);
  }else if(command === 'back'){
    answers.push((front === rear) ? -1 : queue[rear-1]);
  }
}


console.log(answers.join('\n'));

