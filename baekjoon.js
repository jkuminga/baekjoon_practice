/* 
< 2751 - 수 정렬하기2 > 
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
const fs = require('fs');

const data = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
const n = Number(data[0]);

let arr = new Int32Array(n);
for(var i = 0 ; i <n ; i++) arr[i] = Number(data[i+1]);

let tmp = new Int32Array(n);

for (let width = 1; width < n; width <<= 1) {
  // n은 입력할 숫자 개수
  // width : 현재 정렬되어 있다고 가정하는 덩어리의 길이 ex) 2이면 [ab], [cd], [ef] 처럼 두 덩어리 씩 병합된 상태
  // console.log('----------------------------------------')
  // console.log(`현재 ${width} 덩어리 만큼 정렬 되어 있습니다.`)
  for (let left = 0; left < n; left += (width << 1)) {
    const mid = Math.min(left + width, n);
    const right = Math.min(left + (width << 1), n);

    let i = left, j = mid, k = left;
    // console.log(`현재 왼쪽 인덱스는 ${i}, 오른쪽 시작 인덱스는 ${j} 입니다.`)
    // console.log(`현재 mid는 ${mid}, right는 ${right}`)

    while (i < mid && j < right) {
      if (arr[i] <= arr[j]){
        // console.log(`${arr[i]} <= ${arr[j]}이므로 ${arr[i]} 먼저 들어가욧`)
        tmp[k++] = arr[i++];
      } 
      else {
        // console.log(`${arr[i]} > ${arr[j]}이므로 ${arr[j]} 먼저 들어가욧`)
        tmp[k++] = arr[j++];
      } 
      //  console.log(`현재 배열 : ${tmp}`);
    }
    while (i < mid) tmp[k++] = arr[i++]; // 나머지 넣기
    while (j < right) tmp[k++] = arr[j++];// 나머지 넣기
  }
  // arr <-> tmp swap (복사 대신 참조 교체)
  const swap = arr; arr = tmp; tmp = swap;
  // console.log(`${width}의 정렬 결과 : ${arr}`)
}

// 출력
let out = '';
for (let i = 0; i < n; i++) out += arr[i] + '\n';
process.stdout.write(out);