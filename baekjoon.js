/* 
<2581 - 소수>
개요
- 정수 N이 주어 졌을 때 소인수분해 하는 프로그램 작성

입력
- 첫줄에 정수 N 입력


출력
- 소인수 분해 결과를 한 줄에 하나씩 오름차순으로 출력
- N이 1 이면 아무것도 출력하지 않음

방법1
- i가 현재 몫보다 작을 때 까지 반복
- currentNumber를 i로 나누어 떨어지지 않을 때 까지 반복
- 




*/

const rl = require('readline').createInterface({
    input : process.stdin ,output : process.stdout
});

var input = [];

rl.on('line', (line)=>{
    input.push(Number(line));
}).on('close',()=>{
    findPrimeNumbers(input[0]);
})


function findPrimeNumbers(number){
    if(number===1){
        return ;
    }

    var currentNumber = number;
    var i  = 2;
    var result  = [];
    
    while(i <= currentNumber){
        while(currentNumber % i  === 0){
            // result.push(i);
            // console.log(`current prime is ${i} and current quotient is ${currentNumber}`)
            console.log(i)
            currentNumber = currentNumber  / i;
        }
        i++;
    }
}

