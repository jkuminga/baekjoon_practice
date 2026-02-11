/* 
< 2750 - 수 정렬하기 > 
▶︎개요
- N개의 수가 주어질 때 그 수들을 오름차순으로 정렬하기

▶︎입력
- 첫 줄에 입력할 수의 개수 N을 입력
- 두 번째 줄부터 수를 입력하여 N개 입력

▶︎출력
- 오름차순으로 정렬된 결과를 한 줄에 하나씩 출력

▶︎아이디어

▶︎개선방향

*/
const rl = require('readline').createInterface({
  input : process.stdin, output : process.stdout
})

let inputs = []

rl.on('line', (line)=>{
  inputs.push(line);
}).on('close', ()=>{
  const [N, k] = inputs[0].split(' ').map(Number);
  const scores = inputs[1].split(' ').map(Number);

  insertionSort(scores);
  console.log(scores);

  console.log(scores[k-1]);
})


function insertionSort(arr){
  for(var i = 1; i < arr.length ; i++){
    let key = arr[i];
    var j = i-1;
    for( j = i - 1; j >= 0 ; j--){
      if(key > arr[j]){
        arr[j+1] = arr[j];
      }else{
        break;
      } 
    } 
    arr[j+1] = key;
  }
}