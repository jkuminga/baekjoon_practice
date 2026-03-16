/* ==============================================================================
▶︎ 12789 - 도키도키 간식드리미
https://www.acmicpc.net/problem/12789

▶︎ 개요
사람들이 번호표를 받고 한 줄로 서 있지만, 현재 순서는 섞여 있다.
간식은 1번부터 차례대로 받아야 한다.

직접 줄 안에서 순서를 바꿀 수는 없고,
옆의 보조 대기줄(스택)에 사람을 잠시 이동시킬 수 있다.

규칙
1. 현재 줄의 맨 앞 사람은 바로 간식을 받거나,
   보조 대기줄로 이동할 수 있다.
2. 보조 대기줄에 들어간 사람은 다시 원래 줄로 돌아갈 수 없다.
3. 보조 대기줄에서도 맨 앞(가장 최근에 들어간 사람)만 간식을 받을 수 있다.

목표
주어진 순서에서 모든 사람이 1번부터 N번까지
순서대로 간식을 받을 수 있는지 판별한다.

▶︎ 입력
- 첫번쨰 줄에는 내 앞에 있는 학생의 수 N이 주어진다(1과 1,000 사이의 자연수).
- 다음 줄에는 내 앞에 서있는 학생들의 번호표 순서가 앞에서부터 뒤로 주어진다.(1,2,...,N)

▶︎ 출력
- 내가 간식을 무사히 받을 수 있으면 Nice, 아니면 Sad를 출력하자.

▶︎ 아이디어
1) 현재 번호표(n)인 사람이 메인 대기열에 있다면, 그 사람을 찾을 때 까지 나머지 앞의 사람들을 스택에 푸쉬
2) 다음 번호(n+1)인 사람이
   A) 서브 대기열에 없다면  1)과 동일하게 진행
   B) 서브 대기열(스택)에 있다면 pop 한 값이 n+1과 다르면 Sad
3) 모두 진행 시 stack이 비어있다면 Nice
============================================================================== */
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = input[0];
const line = input.slice(1).reverse();
console.log(line);

const stack = [];
let answer = 'Nice';

for(let i = 1; i <= N; i++){
  console.log(`=== 현재 번호 : ${i}번! ===`)
  // 본 대기열에 i번 사람이 있다면, 
  if(!stack.includes(i)){
    console.log(`=== ${i}번은 메인 대기열에 있습니다. ===`)
    for(let j = line.length - 1; j >= 0 ; j--){
      if(line[j] === i) {
        console.log(`   ${i} 번을 메인 대기열에서 찾았습니다!`)
        line.pop();
        console.log(`   현재 메인 대기열(역순) : ${line} / 서브 대기열 : ${stack}`);
        break;
      }else{
        stack.push(line.pop());
        console.log(`   ${i}번을 찾기 위해 ${line[j]} 를 임시 대기열로 보냅니다.`)
        console.log(`   현재 메인 대기열(역순) : ${line} / 서브 대기열 : ${stack}`);
      }
    }
  }
  // 임시 대기열에 있다면
  else{
    console.log(`=== ${i}번은 서브 대기열에 있습니다. ===`)
    if(stack[stack.length - 1] !== i){
      console.log(`   ${i} 번은 임시 대기열에서 나올수 없습니다..`)
      console.log(`   간식 받기에 실패했습니다...`);
      answer = 'Sad';
      break;
    }else{
      console.log(`   임시 대기열에서 ${i}번이 간식을 받습니다!`)
      stack.pop();
      console.log(`   현재 메인 대기열(역순) : ${line} / 서브 대기열 : ${stack}`);
    }
  }
}

console.log('간식 받기에 성공했습니다!!');
console.log(answer);