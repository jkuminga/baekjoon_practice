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

▶︎ 리팩토링 요소
- 현재는 토큰별로 받고 있으나, 1번 명령 떄문이라도 라인 별로 받아서 사용하는 것이 좋음
- 테스트 케이스 N에 대해서는 건드리지 않기
============================================================================== */
const fs = require('fs');
// 변경 사항 1) 토큰 대신 라인 별로 받기
const data = fs.readFileSync(0, 'utf8').trim().split('\n');

// 변경 사항 2) 
const N = Number(data[0]);

const stack = [];
const result = [];

for(let i = 1 ; i <= N ; i++){
  const [command, value] = data[i].split(' ').map(Number);

  if(command === 1){
    stack.push(value)
  }else if(command === 2){
    result.push(stack.length ? stack.pop() : -1);
  }else if(command === 3){
    result.push(stack.length);
  }else if(command === 4){
    result.push(stack.length === 0 ? 1 : 0);
  }else if(command === 5){
    result.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(result.join('\n'));