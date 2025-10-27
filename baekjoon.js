/* 
<9063 - 대지>
▶︎개요
- N 개의 점이 주어지고, 점이 위치한 모든 지점을 포함한 가장 작은 남북, 동서 방향으로
  평행한 변을 갖는 직사각형의 대지의 크기를 찾기

▶︎입력
- 첫 줄에 옥구슬의 개수 n입력
- 이 후 각 줄마다 x,y좌표 입력

▶︎출력
- 대지(직사각형)의 크기를 반환

▶︎아이디어
- 길이와 높이의 최댓값을 찾으면 됨

▶︎개선방향
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

let inputs = [];

rl.on('line',(line)=>{
    inputs.push(line.split(' ').map(Number));
}).on('close',()=>{
    const n = inputs[0];
    const dots = inputs.slice(1, n+1);
    const xs = dots.map((e)=>e[0]);
    const ys = dots.map((e)=>e[1]);

    const width = Math.max(...xs) - Math.min(...xs)
    const height = Math.max(...ys) - Math.min(...ys)

    console.log(width * height);
})


