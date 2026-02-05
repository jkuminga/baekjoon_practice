/* 
< 2750 - 수 정렬하기 > 
▶︎개요
- N개의 수가 주어질 때 그 수들을 오름차순으로 정렬하기

▶︎입력
- 첫 줄에 입력할 수의 개수 N을 입력
- 두 번째 줄부터 수를 입력하여 N개 입력

▶︎출력
- 오름차순으로 정렬된 결과를 한 줄에 하나씩 출력

▶︎아이디어

▶︎개선방향

*/
const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


let inputs = [];

rl.on('line', (line)=>{
  inputs.push(Number(line.trim()));
}).on('close', ()=>{
  const N = Number(inputs[0]);
  let numbers = inputs.slice(1).map(Number);
  let output = [];
  while(numbers.length !== 0){
    // console.log('lefted numbers are', numbers);
    let min = Infinity;
    for(var i = 0 ; i < numbers.length ; i++){
      if(numbers[i] < min) {
        // console.log(`${numbers[i]} is Smaller than ${min}`)
        min = numbers[i]
      } 
    }
    // console.log(`current minimum value is ${min}`);
    output.push(min);
    numbers = numbers.filter(i => i !== min);
  }

  output.forEach((v)=>{console.log(v)})
})