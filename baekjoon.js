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
- 입력 n의 자리수를 구할 때 line 바로 쓰지 않고 Number로 변환 후 다시 String으로 변환 후 길이 구하기
- map 함수 -> 반목분 사용하기(map은 새 배열 생성 시만 사용하기)
- 각 자리수 합 구할 때도 새 배열을 만들지 않고 나누기를 이용하여 자리수 추출하기
*/

const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


rl.on('line', (line)=>{
  const n = Number(line.trim());
  const digits = String(n).length;
  const start = Math.max(0, n- 9*digits);

  let answer = 0;

  for(var i = start; i<n; i++){
    let sum = i;
    let x = i;

    while (x > 0){
      sum += x % 10;
      x = Math.floor(x /10);
    }

    if(sum  === n){
      answer = i;
      break;
    } 
  }

  console.log(answer);
})