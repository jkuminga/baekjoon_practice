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

*/
const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


rl.on('line', (line)=>{
  const N = Number(line.trim());

  let answer = Infinity; 

  let maxOfFives = Math.floor(N / 5);

  for(let i = 0 ; i <= maxOfFives;i++){
    for(let j = 0; 5*i + 3*j <= N; j ++){
      if(5*i + 3*j === N){
        if(i + j < answer) answer = i + j;
      }
    }
  }

  (answer === Infinity) ? console.log(-1) : console.log(answer);

})