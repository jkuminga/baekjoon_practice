// 2903 중앙 이동 알고리즘
// 규칙성 발견 : 다음 사각형의 한 모서리의 점 개수는 이전 사각형의 한 모서리의 점의 개수의 두 배 1을 뺀 값과 같다
// n번째 점 개수 : ((n-1번째 한 모서리의 점의 개수) x 2 -1 )^2


const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
});


var n;
const base = 2;

rl.on('line', (line)=>{
    n = line.split(' ').map(Number);

    rl.close();
})

rl.on('close',()=>{
    var result = base; // 정사각형의 한 모서리 위의 점의 개수

    for(var i = 0 ; i < n ; i++){
        result = (result*2)-1 
        
    }
    console.log(result**2);
})