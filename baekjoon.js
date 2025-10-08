/*
<5086 배수와 약수 - 리펙토링>
수정할 점
- 요구사항에 따르면 0 0 을 입력받았을 때만 rl.close() 를 해주면 되는데, 
  현재 상황에서는 3 3과 같은 상황에서는 종료되서는 안된다.

*/  

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
});

rl.on('line',(line)=>{
    let [a, b] = line.split(' ').map(Number);

    // 변경사항 1: 입력이 0 0일 경우 종료
    if(a === 0 && b === 0) rl.close();


    // 변경사항 2 : 코드 단순화
    if(b % a === 0) console.log('factor');
    else if(a % b === 0) console.log('multiple');
    else console.log('neither')
})