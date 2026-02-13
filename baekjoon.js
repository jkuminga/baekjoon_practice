/* 
< 11651 - 좌표 정렬하기 2 > 
▶︎개요
- N 개 점들을 y 좌표로 오름차순으로 정렬한다. 단 y 좌표 값이 동일하면 x 좌표를 보고 판단한다.

▶︎입력
- 첫 줄에 자연수 N (N <= 100,000)
- 두 번째 줄부터 N개의 좌표가 주어진다.

▶︎출력
- 첫 줄부터 나열된 좌표들을 하나씩 출력한다.

▶︎아이디어

▶︎개선방향

*/
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];

let arr = [];
for(let i = 1; i < data.length ; i += 2) arr.push([data[i], data[i+1]]);

console.log(arr);

let tmp = new Array(n);

for(var width = 1; width < n; width *= 2){
  console.log(`width ${width} process started`);
  for(var left = 0; left < n; left += width * 2){
    const mid = Math.min(n, left + width);
    const right = Math.min(n, left+ width*2);

    let i = left, j = mid, k = left;
    console.log(`current left : ${left}, mid : ${mid}, right : ${right}`)
    while(i < mid && j < right){
      if(arr[i][1] < arr[j][1]){
        console.log(`y value ${arr[i][1]} is smaller than ${arr[j][1]}`)
        tmp[k++] = arr[i++];
      }else if(arr[i][1] === arr[j][1]){
        console.log(`y value ${arr[i][1]} is same with ${arr[j][1]}`)
        if(arr[i][0] < arr[j][0]){
          console.log(`x valaue ${arr[i][0]} is smaller than ${arr[j][0]}`)
          tmp[k++] = arr[i++];
        }else{
          console.log(`x valaue ${arr[i][0]} is bigger than ${arr[j][0]}`)
          tmp[k++] = arr[j++];
        }
      }else{
        console.log(`y value ${arr[i][1]} is bigger than ${arr[j][1]}`)
        tmp[k++] = arr[j++];
      }
    }
    while(i < mid) tmp[k++] = arr[i++];
    while(j < right) tmp[k++] = arr[j++];
  }
  let swap = arr; arr = tmp; tmp = swap;
  // console.log(`current sorted array is ${arr} and size is ${arr.length} `)
  console.log(arr);
}

let out = '';
for(var i = 0 ; i < n; i ++) out += arr[i][0] + ' ' +arr[i][1]+ '\n';
process.stdout.write(out);
