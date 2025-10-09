/* 
<1978번 소수 찾기>
개요
- 입력한 숫자들 중 소수인 숫자들의 개수를 반환하는 코드

입력
- 첫 줄에 입력할 숫자의 개수 n을 입력
- 다음 줄에 N 개의 수를 입력

출력
- n개 의 수 중 소수의 개수를 출력

구현
- 각 수의 약수 개수를 찾아서 반환하는 함수 생성
- 약수의 개수가 2인 경우 소수로 판단
*/

const rl = require('readline').createInterface({
    input : process.stdin ,output : process.stdout
});

var input= [];

function countFactors(number){
    var factorCount = 0 ;
    for(var i = 1 ; i <= number ; i ++){
        if(number % i === 0) factorCount ++;
    }

    return factorCount;
}

rl.on('line',(line)=>{
    input.push(line)
}).on('close', ()=>{
    var n = input[0];
    var numbers = input[1].split(' ').map(Number);

    var sum = 0;

    for(var i = 0 ; i < n ; i ++){
        if( countFactors(numbers[i]) === 2) sum ++;
    }

    console.log(sum);

})
