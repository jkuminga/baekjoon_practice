/* 
< 2839 - 설탕배달 > 
▶︎개요
- 5/3 kg의 설탕 봉지를 이용하여 최대한 적은 봉지를 들고 Nkg 설탕을 배달하고자 함

▶︎입력
- Nkg

▶︎출력
- 배달할 봉지의 최소 개수
- 정확하게 Nkg을 맞출 수 없다면 -1

▶︎아이디어
- 최대 5kg의 개수부터 시작해서 딱 맞아떨어지는 최소 봉지의 개수 찾기

▶︎개선방향
- 단일 루프문으로 해결하자
- 5kg 봉지 개수가 최대인 경우부터 반복문이 시작하기 때문에 N과 같아지는 상황에 break 해도 된다.

*/
const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


rl.on('line', (line)=>{
  const N = Number(line.trim());

  let answer = -1; 

  let maxOfFives = Math.floor(N / 5);
  
  for(var i = maxOfFives; i >=0; i--){
    if((N - 5 * i) % 3 === 0){
      answer = i + ((N - 5 * i ) / 3);
      break;
    }
  }

  console.log(answer);
})