/* 
<9506번 약수들의 합>
개요
- 어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면 그 수를 완전수라고 함
- n이 완전수인지를 판단해주는 프로그램 작성

출력
- 완전수인 경우 : n = a + b + c
- 완전수가 아닌경우 : n is NOT perfect.

구현
- 먼저 약수를 구해서 배열에 넣고 배열의 마지막 인덱스의 값과 나머지들의 합이 같은 경우 완전수
 */

const rl = require('readline').createInterface({
    input : process.stdin ,output : process.stdout
});


rl.on('line',(line)=>{
    const number = parseInt(line);

    if(number === -1) {
        rl.close();
        return ;
    }

    var factors = []; 

    for(var i = 1 ; i <number; i++){
        if(number % i === 0 ) factors.push(i);
    }

    var sum = 0;

    for(var f of factors) sum += f

    if(number === sum) console.log(`${number} =`, factors.join(' + '));
    else console.log(`${number} is NOT perfect.`)
    

})
