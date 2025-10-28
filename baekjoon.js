/* 
<50073 - 삼각형과 세 변>
▶︎개요
- 세 변의 길이를 통해서 삼각형의 종류를 반환함

▶︎입력
- 각 줄에 세 개의 변 개수를 모두 입력
- 마지막 줄은 0 0 0, 이 줄은 계산하지 않음

▶︎출력
- 각 케이스에서 가장 긴 변의 길이보다 나머지 두변의 길이의 합이 길지 않으면 invalid
- Equilateral :  세 변의 길이가 모두 같은 경우
- Isosceles : 두 변의 길이만 같은 경우
- Scalene : 세 변의 길이가 모두 다른 경우
 
▶︎아이디어
- inputs[i]의 모든 변의 길이가 0이 아닌 동안 실행
- 각 케이스에 대해 invalid 먼저 확인
- filter 함수를 통해 길이가 다른 변만 result 리스트에 저장
- result 의 길이를 통해 확인

▶︎개선방향
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

let inputs = [];

rl.on('line', (line)=>{
  inputs.push(line.split(' ').map(Number));
}).on('close', ()=>{
  for(let i of inputs){
    if(i[0] === 0 && i[1] === 0 && i[2] === 0) {
      return ;
    }

    if(2 * Math.max(...i) >= (i.reduce((acc, cur) => acc + cur, 0))){
      console.log('Invalid');
    }else{
      if(i[0] === i[2] && i[1] === i[2]){
        console.log('Equilateral');
      }else if(i[0] === i[1] || i[0] === i[2] || i[2] === i[1] ){
        console.log('Isosceles')
      }else{
        console.log('Scalene');
      }
    }
  }
})
