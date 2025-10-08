// 5086 배수와 약수
// 두 수 a b가 주어 질 때, 두 수 간의 약수/배수 관계를 찾는 문제
// a가 b의 약수이면 factor, 배수이면 multiple, 어떠한 관계도 아니면 neither

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
});

rl.on('line',(line)=>{
    let [a, b] = line.split(' ').map(Number);

    if(a > b){
        if(a % b ==0) console.log('multiple');
        else console.log('neither');
    }else if(a < b){
        if(b % a ==0) console.log('factor');
        else console.log('neither');
    }else{
        rl.close();
    }
})