/* 
<24313 - 알고리즘 수업 - 점근적 표기 1>
▶︎개요
- O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}
- 즉 입력된 n0보다 크거나 같은 모든 n에 대해서 g(n)이 f(n)보다 큰지를 찾기
- f(n) = a1n + a0  
- g(n) = c·n

▶︎입력
- 첫 줄에 a0과 a1을 입력받음
- 두번째 줄에 양의 정수 c, 세번쨰 줄에 양의 정수 n0를 입력받음

▶︎출력
- O(g(n))의 정의를 만족하면 1, 아니면 0을 출력한다.

 
▶︎아이디어
- 그래프 상으로 g(n)의 그래프는 n=n0 이후 부터 항상 f(n) 보다 위에 있어야한다.
- 조건을 만족하기 위해 g(n0) >= f(n0) 이어야 하며, g(n)의 기울기 c가 f의 기울기인 a1와 크거나 같아야 한다.

▶︎개선방향
- 입력 된 값들을 하나의 코드로 파싱
- 조건문도 간단하게 변경
*/

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];
rl.on('line', (line) => {
  inputs.push(line);
}).on('close', () => {
  const data = inputs.join(' ').trim().split(/\s+/).map(Number);
  const [a1, a0, c, n0] = data;

  const ok = c >= a1 && (a1 * n0 + a0) <= c * n0;
  console.log(ok ? 1 : 0);
});
