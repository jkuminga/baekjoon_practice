/* 
<1085 - 직사각형에서 탈출>
▶︎개요
- 현재 좌표 (x,y)에서, 각 좌표축에 평행하고 (0,0)을 왼쪽 아래 꼭짓점으로,
  (w,h)을 오른쪽 위 꼭짓점으로 가지는 직사각형에 대해서, 현재 좌표에서 직사각형의
  경계선까지 닿는 가장 가까운 거리 구하기

▶︎입력
- 첫줄에 정수 x,y,w,h 입력

▶︎출력
- 현재 좌표에서 직사각형 경계까지의 최소 거리를 반환

▶︎아이디어
- 점에서 직선까지 가장 가까운 거리는 수직선
- 즉 x축에 대해서 0과 w 사이의 거리를 구하고, y값을 0과 h 사이 거리를 구해서
- 그 중 가장 작은 값을 반환함
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

let input;

rl.on('line', (line)=>{
    input = line.split(' ').map(Number);
}).on('close',()=>{
    const [x,y,w,h] = input;
    
    const b0x = Math.abs(x - 0);
    const bwx = Math.abs(x - w);
    const b0y = Math.abs(y - 0);
    const bhy = Math.abs(y - h);

    console.log( Math.min(b0x, bwx, b0y, bhy));
})