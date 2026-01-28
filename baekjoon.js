/* 
< 1018 - 체스판 다시 칠하기 > 
▶︎개요
- MN개의 단위 정사각형으로 나누어져 있는 MxN크기의 보드
- 이 보드는 흰색/검은색이 랜덤하게 칠해져 있음
- 8x8로 잘라서 체스판으로 만들고자 할 때, 다시 칠해야 하는 칸의 최소의 개수를 구하자

▶︎입력
- 높이(N)와 너비(M) (M,N은 50 이하의 자연수)가 첫 줄에 주어짐
- 두번째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어짐

▶︎출력
- 다시 칠해야 하는 칸의 최소 개수를 반환

▶︎아이디어
- 체스판을 칠하는 두가지 경우(왼쪽 최상단이 흰 or 흑)에 따라 최소 개수를 구함
- 시작 칸의 색 = 인덱스 값의 합(i+j)이 짝수인 칸의 색

▶︎개선방향
*/
const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})

let answer = Infinity;
let inputs = []


rl.on('line', (line)=>{
  inputs.push(line);
}).on('close', ()=>{
  const [n, m] = inputs[0].trim().split(' ').map(Number);
  const board = inputs.slice(1).map(line => line.trim())
  // const board = inputs.slice(1)과 동일

  for(let x = 0; x <= n-8; x++){
    for(let y = 0; y <= m-8; y++){
      let repaintW = 0;
      let repaintB = 0;

      for (let i = 0; i < 8; i++){
        for (let j = 0 ; j< 8; j++){
          const currentTile = board[x + i][y + j]
          const isEven = ((i+j)%2 ===0);

          const expectedW = isEven ? 'W' : 'B'
          const expectedB = isEven ? 'B' : 'W'

          if (currentTile !== expectedW) repaintW++;
          if (currentTile !== expectedB) repaintB++;
        }
      }

      answer = Math.min(answer, repaintB, repaintW)
    }
  }
  console.log(answer);
})

