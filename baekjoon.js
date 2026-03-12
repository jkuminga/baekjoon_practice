/* ==============================================================================
▶︎ 9012 - 괄호

▶︎ 개요
입력된 괄호 문자열이 올바른 괄호 문자열(VPS) 인지 아닌지를 판단하여 YES OR NO로 출력하자.

▶︎ 입력
- 첫 번째 줄에 테스트 케이스의 개수 T가 주어진다.
- 두 번째 줄부터 T개의 괄호 문자열이 각 줄에 주어진다.(문자열의 길이는 2 이상 50 이하)

▶︎ 출력
- 각 문자열이 VPS이면 YES, 아니면 NO를 출력한다.

▶︎ 아이디어
1) (를 만나면 스택에 넣는다.
2) )를 만나면 
    - 스택이 비어 있으면 No 입력 후 다음 케이스 진행
    - 스택이 비어있지 않으면 pop 후 다음 문자 테스트
3) 각 케이스에 대해서
============================================================================== */

const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const k = Number(inputs[0]);


const answer = [];

for(var i = 1; i <= k ; i++){
  const stack = [];
  const ps = inputs[i];

  let notVPS = false;
  for(const ch of ps){
    if(ch === '('){
      stack.push(ch);
    }else if(ch === ')'){
      if(stack.length === 0) {
        notVPS = true;
        break;
      }
      stack.pop()
    }
  }
  answer.push((stack.length === 0 && !notVPS) ? 'YES' : 'NO');
}
console.log(answer.join('\n'))