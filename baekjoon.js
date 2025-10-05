// 진법 변환2
// 과정
// 1. n(10진수) 와 B(변환할 진법) 입력받음
// 2. n보다 커지는 B의 a제곱에 대한 a를 구함
// 3. a부터 시작해서 0 까지 B^a로 n을 나눔

const rl = require('readline').createInterface({
    input :process.stdin, output: process.stdout
});

var digits = {}
for(var i = 0 ; i <10; i++) digits[i.toString()] = i;
for(var i = 0 ; i <26; i++) digits[(10+i).toString()] = String.fromCharCode(65+i);


var n, b;

rl.on('line',(line)=>{
    [n,b] = line.split(' ').map(Number);

    rl.close();
}).on('close',()=>{
    var m = 0;

    while(n > b**m){
        // console.log(b**m);
        m++;
    }
    // console.log(`${n} is smaller than ${b**m}, and m is ${m}`)

    var result = [];
    for(var i = m-1; i >= 0; i--){
        var mulB = Math.floor(n / b**i);
        n = n - (mulB*b**i)
        result.push(mulB)
    }


    console.log(result.map(e=>digits[e]).join(''));
})