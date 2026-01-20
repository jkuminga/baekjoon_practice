/* 
<19532 - 수학은 비대면강의입니다.>
▶︎개요
- ax + by = c 와 dx + ey = f 를 만족하는 x와 y를 출력하기

▶︎입력
- a,b,c,d,e,f 가 첫줄에 공백으로 주어짐[-999, 999]
- 단 x,y가 [-999, 999] 의 정수이며 유일한 (x,y)가 존재하도록만 보장됨

▶︎출력
- x, y
 
▶︎아이디어


▶︎개선방향
- 입력 n의 자리수를 구할 때 line 바로 쓰지 않고 Number로 변환 후 다시 String으로 변환 후 길이 구하기
- map 함수 -> 반목분 사용하기(map은 새 배열 생성 시만 사용하기)
- 각 자리수 합 구할 때도 새 배열을 만들지 않고 나누기를 이용하여 자리수 추출하기
*/

const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})


rl.on('line', (line)=>{
  const [a,b,c,d,e,f] = line.trim().split(' ').map(Number);

  const det = a * e - b * d;

  const x = (c * e - b * f) / det;
  const y = (a * f - c * d) / det;

  console.log(`${x} ${y}`)

})