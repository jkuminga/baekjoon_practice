/* ==============================================================================
▶︎ 24511 - queuestack
https://www.acmicpc.net/problem/24511

▶︎ 개요
새로운 자료구조인 queuestack의 구조는 다음과 같다. 1,2,... N번의 자료구조가 나열되어 있다.
각각의 자료구조에는 스택이나 큐 둘중 하나가 들어있으며, 각 자료구조에는 원소가 하나만 들어 있다.

queuestack의 동작방식은 다음과 같다.
  - x0을 입력받아 1번 자료구조에 push한 뒤, 1번 자료구조에서 pop한다. 이때의 원소를 x1이라 한다.
  - x1을 2번 자료구조에 push한 뒤, 2번 자료구조에서 pop 한다. 이때의 원소를 x2라고 한다.
    ...
  - xn-1을 N번 자료구조에 push한 뒤, N번 자료구조에서 pop한다. 이때의 원소를 xn이라고 한다.
  - xn을 리턴한다.

queuestack에 길이 M의 수열 C의 원소들을 순서대로 넣는다. 이 때 각 회차의 진행상태는 유지된다.
(이전 회차에 삽입된 원소가 각 자료구조에 남아있음)

▶︎ 입력
- 첫째 줄에 queuestack을 구성하는 자료구조의 개수 N이 주어진다(1 ~ 100,000)
- 둘째 줄에 queuestack의 자료구조가 순서대로 주어진다. 0이면 큐, 1이면 스택
- 셋째 줄에 queuestack의 각 자료구조가 가지고 있는 원소가 1개씩 주어진다.(1 ~ 1,000,000,000)
- 넷째 줄에 삽입할 수열의 길이 M이 주어진다.(1 ~ 100,000)
- 다섯째 줄에 삽입할 수열의 원소들이 주어진다. 각 원소는 1보다 크거나 같고 1,000,000,000보다 작거나 같다.
- 입력으로 주어지는 모든 수는 정수이다.

▶︎ 출력
- 첫번째 줄에 수열의 각 원소를 입력했을 때의 리턴값을 공백으로 구분하여 출력한다.

▶︎ 아이디어
- 스택의 경우 입력한 값이 그대로 출력되기에 고려하지 않아도 됨
- 큐가 여러개 선형으로 연결된 구조 = 큐 1개
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(inputs[0]); // 4
const structures = inputs[1].trim().split(/\s+/).map(Number); // [0, 1, 1, 0]
const existingElements = inputs[2].trim().split(/\s+/).map(Number); // [1, 2, 3, 4]
const M = Number(inputs[3]); // 3
const C = inputs[4].trim().split(/\s+/).map(Number); // [2, 4, 7]

const answer = [];

const queue = [];
let front = 0;
let rear = 0

for(let i = 0 ; i < N; i++){
    if(structures[i] === 0) {
        queue[rear] = existingElements[i];
        rear++;
    }
}

queue.reverse();
for(let i = 0; i < M; i++){
    // 0번 pop하고
    // 뒤에 push
    queue[rear] = C[i];
    answer.push(queue[front++]);
    rear++
}

console.log(answer.join(' '));