/* 
<1978번 소수 찾기 - 개선된 코드>
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

개선 코드
- n에 대한 약수의 표현을 a*b=n 이라고 하자
- sqrt(n) 을 경계로 약수 쌍이 좌우 반전되어 존재한다.
- 즉 루트 n을 기준으로 약수쌍이 대칭적으로 존재하기 떄문이다.
- ex) n=36, 약수들 = 1*36 ... 4*9, 6*6(루트 n), 9*4(대칭)
- 소수의 정의를 좀 더 고려하여 countFactors 코드를 정리
*/

const rl = require('readline').createInterface({
    input : process.stdin ,output : process.stdout
});

var input= [];

function countFactors(number){
    // var factorCount = 0 ;
    // for(var i = 1 ; i <= number ; i ++){
    //     if(number % i === 0) factorCount ++;
    // }

    // return factorCount;

    /* 
    <변경사항>
    기존에는 약수의 개수만 반환하고 외부에서 한 번 더  체크
    이번에는 한 번의 순환에서 바로 소수 여부 체크
    */
    if(number < 2)return false; //1는 소수 x

    for(var i = 2 ; i < Math.sqrt(number);i++ ){
        if( number % i === 0 ) return false;
        // n이 소수 : n이 1로만 나누어 떨어짐
        // 1을 제외하고 1로 나누어 떨어지지 않는 수가 있다면 약수 아님(false)
    }

    return true;
}


rl.on('line',(line)=>{
    input.push(line)
}).on('close', ()=>{
    var n = input[0];
    var numbers = input[1].split(' ').map(Number);

    var count = 0;

    for(var num of numbers){
        if(countFactors(num)) count++;
    }

    console.log(count);

})
