/* ==============================================================================
▶︎ 4949 - 균형 잡힌 세상 
https://www.acmicpc.net/problem/4949

▶︎ 개요
문자열이 주어졌을 때, 괄호들의 균형이 잘 맞춰져 있는지 확인하는 프로그램을 작성하자.
문자열에는 ()와 [] 두 종류의 괄호가 주어진다.

▶︎ 입력
- 각 문자열은 영어 알파벳, 공백, 소괄호, 대괄호로 구성되며, 길이는 100글자보다 작거나 같으며, .으로 끝난다.
- 입력의 종료 조건으로 . 하나가 들어온다.

▶︎ 출력
- 각 줄마다 해당 문자열이 균형을 이루고 있으면 yes, 아니면 no를 출력한다.

▶︎ 아이디어
- 모든 왼쪽 괄호를 스택에 넣는다.
- 오른쪽 괄호를 만났을 때 스택을 pop 한 괄호의 타입이
  1) 오른쪽 괄호의 타입과 같은 경우 : 계속 진행
  2) 오른쪽 괄호의 타입과 다른 경우 : 불균형
  3) 스택이 비어있는 경우 : 불균형
- 또한 각 케이스 종료 후 스택이 비어 있는 경우에도 불균형
============================================================================== */
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const answers = [];
const YES = 'yes';
const NO = 'no';

for(let str of input){
  if(str === '.') break;
  answers.push(vaildate(str));
}

function vaildate(str){
  const stack = [];
  let isValid = true;

  for(let ch of str){
    if(ch === "(" || ch === "[") stack.push(ch);
    else if(ch === ')') {
      if(stack.length === 0) return NO;
      else{
        if(stack[stack.length - 1] === '(') stack.pop();
        else return NO;
      }
    }
    else if(ch === ']') {
      if(stack.length === 0) return NO;
      else{
        if(stack[stack.length - 1] === '[') stack.pop();
        else return NO;
      }
    }
  }
  if(stack.length === 0) return YES;
  else return NO;
}

console.log(answers.join('\n'));