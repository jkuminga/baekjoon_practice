/* ==============================================================================
▶︎ 28278 - 스택2

▶︎ 개요
스택을 구현한 다음, 다음 명령들을 처리하는 프로그램을 작성하라
명령 1) 입력 1 X : 정수 X를 스택에 넣는다.
명령 2) 입력 2 : 스택에 정수가 있다면 맨 위의 정수를 뺀 후 출력한다. 없다면 -1을 출력한다.
명령 3) 입력 3 : 스택에 들어있는 정수의 개수를 출력한다.
명령 4) 입력 4 : 스택이 비어있으면 1 ,아니면 0을 출력한다.
명령 5) 입력 5 : 스택에 정수가 있으면 맨 위의 정수를 출력만 한다. 없다면 -1을 출력한다.

▶︎ 입력
- 첫번째 줄에 명령의 개수 N이 주어진다.[1, 1,000,000]
- 둘째 줄 부터 각 줄에 명령이 하나씩 주어진다.
  (정수 X는 1과 100,000 사이이며, 출력을 요구하는 명령은 최소 하나 주어진다.)

▶︎ 출력
- 출력을 요구하는 명령이 주어질 때 마다 명령의 결과를 한 줄에 하나씩 출력한다.

▶︎ 아이디어

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let N = data[0];
const commands = data.slice(1);

const stack = [];
const result = [];

let i  = 0 ;
while(i < N){
  if(commands[i] === 1){
    i++;
    N++;
    stack.push(commands[i]);
  }else if(commands[i] === 2){
    if(stack.length !== 0) result.push(stack.pop())
    else result.push(-1);
  }
  else if(commands[i] === 3){
    result.push(stack.length);
  }
  else if(commands[i] === 4){
    if(stack.length === 0) result.push(1)
    else result.push(0);
  }
  else{
    if(stack.length !== 0) result.push(stack[stack.length - 1]);
    else result.push(-1);
  }
  i++
}

console.log(result.join('\n'));

