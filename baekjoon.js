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
  const N = inputs[0].trim();
  const array = inputs.slice(1).map(Number);

  const result = mergeSort(array);

  result.forEach((v)=>console.log(v));
})


function mergeSort(arr){
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right)
}

function merge(left, right){
  const result = [];
  let i = 0 , j = 0;

  while(i < left.length && j < right.length){
    result.push(
      left[i] < right[j] ? left[i++] : right[j++]
    )
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

