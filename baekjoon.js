/* 
<2798 - 블랙잭>
▶︎개요
- 변형된 블랙잭 룰 : N장의 카드 중에 3개를 골라 M보다 작으면서 최대한 가깝게 조합하기

▶︎입력
- 첫 줄에 N(카드의 개수)과 M(총합)을 입력
- 두 번째 줄에 임의의 카드의 숫자를 N개를 입력

▶︎출력
- M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력
 
▶︎아이디어
- 그냥 삼중반복문 쓰는거

▶︎개선방향
- 하나의 fixed를 두고, 나머지 카드들 중 인덱스를 두개를 두고(left: 작은 쪽 부터/ right: 큰쪽부터)
- 작은 값 + 큰값이 m보다 크면 right(큰 쪽)을 한 칸 뒤로(--)
- 작은 값 + 큰 값이 m보다 작으면 best랑 비교 후 left를 한 칸 앞으로(++)
- 이렇게 하면 기존의 O(n^3)에서 O(n^2)까지 줄일 수 있다.
*/

const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})

const inputs = [];
rl.on('line', (line)=>{
  inputs.push(line)
}).on('close', ()=>{
  const [n,m] = inputs[0].split(' ').map(Number)
  var cards = inputs[1].split(' ').map(Number)
  
  cards.sort((a,b)=>a-b)

  var best = 0;

  for(var i = 0 ; i < n-2;i++){
    let left = i+1;  // 가장 왼쪽(작은 쪽)
    let right = n-1; // 가장 오른쪽(큰 쪽)

    while (left < right){
      const sum = cards[i] + cards[left] + cards[right]

      if(sum > m){
        right --
      }else{
        if(sum > best) best = sum
        left ++
      }
    }
  }

  console.log(best)
})