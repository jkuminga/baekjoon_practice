/* 
<14215 - 세 막대>
▶︎개요
- 길이를 줄일 수 있는 막대 a,b,c를 이용하여 최대 둘레를 가지는 삼각형을 만들기

▶︎입력
- 한 줄에 세 막대의 길이를 입력

▶︎출력
- 길이를 조절해서 만들어진 삼각형의 둘레의 길이를 출력

 
▶︎아이디어
세 변에 대해서, 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아져야 함


▶︎개선방향
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

rl.on('line',(line)=>{
  const parts = line.trim().split(' ').map(Number);
  if(parts.length != 3 || parts.some(Number.isNaN)) return ;

  const sorted = parts.sort((x, y)=> x-y);

  if(sorted[2] >= sorted[0] + sorted[1]){
    console.log((sorted[0] + sorted[1])*2  - 1)
  }else{
    console.log(sorted[0] + sorted[1] + sorted[2]);
  }
})