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

  cards.map((e, index)=>{
    for(var f=index+1; f < cards.length ; f++){
      for(var s = f+1; s< cards.length ; s++){
        if(e + cards[f] + cards[s] <= m){
          if(e + cards[f] + cards[s] > best){
            best = e + cards[f] + cards[s];
          }
        }
      }
    }
  })

  console.log(best)
})