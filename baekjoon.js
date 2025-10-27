/* 
<3009 - 네번째 점>
▶︎개요
- 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위한 네번째 점의 좌표를 구하기

▶︎입력
- 줄 마다 x,y 값을 입력

▶︎출력
- 네 번째 점의 좌표를 출력

▶︎아이디어
- 점들 중 각 축에 대해서 하나 있는 값이 네번째점의 좌표가 되야 함

▶︎개선방향
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

let inputs = [];

rl.on('line', (line)=>{
    inputs.push(line.split(' ').map(Number));
}).on('close',()=>{
    let result = [];

    if(inputs[2][0] === inputs[0][0]){
        result.push(inputs[1][0])
    }else if(inputs[2][0] === inputs[1][0]){
        result.push(inputs[0][0])
    }else{
        result.push(inputs[2][0])
    }

    if(inputs[2][1] === inputs[0][1]){
        result.push(inputs[1][1])
    }else if(inputs[2][1] === inputs[1][1]){
        result.push(inputs[0][1])
    }else{
        result.push(inputs[2][1])
    }

    console.log(result.join(' '));
})


// let xs={}, ys={};
    
//     for(var i = 0 ; i < inputs.length;i++){
//         if(xs[inputs[i][0]] === undefined) {
//             xs[inputs[i][0]] = 1;
//         }else{
//             xs[inputs[i][0]] = xs[inputs[i][0]] + 1;
//         }

//         if(xy[inputs[i][1]] === undefined) {
//             xy[inputs[i][1]] = 1;
//         }else{
//             xy[inputs[i][1]] = xy[inputs[i][1]] + 1;
//         }
//     }