/* 
<2581 - 소수>
개요
- 입력한 두 수 m과 n 사이의 소수들의 합과 그 중 최솟값을 반환하는 코드

입력
- 첫 줄에 m 입력, 두번째 줄에 n 입력


출력
- 첫째 줄에 m이상 n 이하 소수 들의 합을 출력
- 첫째 줄에 m이상 n 이하 소수 중 최솟값을 출력

구현
- 각 수에 대해서 소수 검사를 한 후 소수이면 배열에 집어넣기
- 소수 검사 결과 배열에서 min() 과 sum()을 통해서 결과값 출력

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

var input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    const m= input[0];
    const n = input[1];

    var primes = [];

    for(var i = m ; i <=n; i++){
        if(findNumberIsPrime(i)) primes.push(i);
    }


    if(primes.length == 0) console.log(-1);
    else{
        console.log(findSum(primes))
        console.log(Math.min(...primes));
    }
    
    

})

function findNumberIsPrime(number){
    if(number < 2) return false;

    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0 ) return false;
    }

    return true;
}


function findSum(primes){
    var sum = 0 ;
    for(var p of primes) sum += p
    return sum;
}
