/* 
<2231 - 분해합>
▶︎개요
- 분해합 : 자연수 N + N의 모든 자리수의 합
- 자연수 M의 분해합이 N 인 경우 M을 N의 생성자라고 한다.
- 자연수 N 이 주어졌을 때 N의 가장 작은 생성자를 구하는 프로그램 작성

▶︎입력
- 첫 줄에 자연수 N이 주어짐

▶︎출력
- 가장 작은 생성자를 출력(생성자가 없으면 0 출력)
 
▶︎아이디어
- 자연수 N의 범위가 <1000000 이므로 생성자 M의 각자리 수의 합은 54를 넘을 수 없다.
- 

▶︎개선방향
*/

const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


rl.on('line', (line)=>{
  const n = parseInt(line.trim());
  const minIndex = Math.max(0, n-(line.length * 9))

  let m = 0;
  for(var i = minIndex; i<n; i++){
    let sum = 0
    var eachDigit = i.toString().split('').map((e)=>{
      sum += parseInt(e);      
    })

    if(sum + i === n){
      m = i;
      break;
    } 
  }

  console.log(m);
})