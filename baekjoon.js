/* 
<10101 - 삼각형 외우기>
▶︎개요
- 세 각의 크기를 받아서 삼각형의 분류를 반환 

▶︎입력
- 줄마다 한 각을 입력

▶︎출력
- 세 각의 크기가 모두 60이면 Equilateral
- 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
- 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
- 세 각의 합이 180이 아닌 경우에는 Error
 
▶︎아이디어

▶︎개선방향
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

let inputs = [];
rl.on('line',(line)=>{
  inputs.push(parseInt(line));
}).on('close',()=>{
  // let sum = 0;
  // inputs.forEach(v => sum = sum + v);
  // const result = inputs.filter(v=>inputs.indexOf(v) === inputs.lastIndexOf(v));

  let sum = 0 ; 
  let result = [];
  inputs.forEach((v)=>{
    if(inputs.indexOf(v) === inputs.lastIndexOf(v)) result.push(v);
    sum += v;
  })
  
  if(sum == 180){
    if(result.length === 0 ) console.log('Equilateral');
    else if(result.length === 1) console.log('Isosceles');
    else console.log('Scalene');
  }else{
    console.log('Error');
  }
})
