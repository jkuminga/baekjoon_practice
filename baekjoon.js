/* 
<15894 - 수학은 체육과목입니다.>
▶︎개요
- 한 변의 길이가 1인 정사각형을 피라미드 식으로 붙여 나갈 때, 가장 아랫부분의 정사각형의
  개수가 n개가 됬을 때 피라미드 의 총 둘레의 길이를 구하기

▶︎입력
- 첫줄에 n 입력

▶︎출력
- 피라미드 전체의 둘레의 길이

▶︎아이디어
- an = n*4

▶︎개선방향
- 영점과 좌표 사이 거리는 그냥 x, y로 두면 됨(x-0을 왜하노)
- 변수 지정하지 말고 바로 Math.min() 안에 넣어서 콘솔에 출력
- 입력 x,y 값이 w,h보다 작아서 abs 필요없음
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

rl.on('line', (line)=>{
    const n = Number(line);

    console.log(n*4);

    rl.close();
})