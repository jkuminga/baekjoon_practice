/* 
<50073 - 삼각형과 세 변>
▶︎개요
- 세 변의 길이를 통해서 삼각형의 종류를 반환함

▶︎입력
- 각 줄에 세 개의 변 개수를 모두 입력
- 마지막 줄은 0 0 0, 이 줄은 계산하지 않음

▶︎출력
- 각 케이스에서 가장 긴 변의 길이보다 나머지 두변의 길이의 합이 길지 않으면 invalid
- Equilateral :  세 변의 길이가 모두 같은 경우
- Isosceles : 두 변의 길이만 같은 경우
- Scalene : 세 변의 길이가 모두 다른 경우
 
▶︎아이디어
- inputs[i]의 모든 변의 길이가 0이 아닌 동안 실행
- 각 케이스에 대해 invalid 먼저 확인
- filter 함수를 통해 길이가 다른 변만 result 리스트에 저장
- result 의 길이를 통해 확인

▶︎개선방향
1. Max 함수를 사용하지 않고, 길이 순으로 배열 내부를 나열하기
1.1 Math 함수의 결과 값을 변수로 캐싱해서 사용
-> max 함수의 파라미터 크기가 커질 수록 더욱 더 캐싱해서 사용해야 함

2. 방어적 처리 추가 권장
-> 변의 길이가 3개가 아닐때 or 입력 값 중 숫자가 아닐 경우

3. on에서 루프 수행하고 예외처리 시 rl.close()를 호출
-> 이렇게 각 케이스 마다 결과를 반환하는 경우는 rl.line에서 각 케이스 마다 바로 결과를 반환 하는 게 좋음
-> 반면 한 번에 전체 값들을 가지고 연산해야 하는 경우 rl.close() 사용
*/

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
})

rl.on('line',(line)=>{
  const parts = line.trim().split(' ').map(Number);

  // 2. 방어적 처리 추가
  if(parts.length != 3 || parts.some(Number.isNaN)) return;

  const [a, b, c] = parts;
  if( a === 0 && b ===0 && c === 0) {
    rl.close();
    return ; 
  }

  // 배열을 길이가 작은 순으로 나열
  const s = [a,b,c].sort((x,y) => x-y);
  const sum = s[0] + s[1] + s[2];

  if(s[2] >= s[0] + s[1]) { 
    console.log('Invalid');
  } else if (s[0] === s[2]) { // 세 변 모두 같음
    console.log('Equilateral');
  } else if (s[0] === s[1] || s[1] === s[2]) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
})

