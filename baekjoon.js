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
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const n = Number(data[0]);

let arr = new Int32Array(n);
for(var i = 0 ; i < n ; i ++) arr[i] = Number(data[i + 1]);

let tmp = new Int32Array(n);

// a <<= b (a = a << b) : a를 32비트 2진수로 변환 후 b 만큼 ls 후 저장
for(let width = 1; width < n; width <<= 1){
    // width(현재 나누어 진 배열의 덩어리 크기) 2배 후 left에 더 함
    // 즉 2*width 만큼 건너다니면서 병합하겠다는 의미
    for(var left = 0 ; left < n ; left += (width<<1)){ 
        const mid  = Math.min(left+width, n) // left와 right 분리
        const right = Math.min(left + (width << 2), n) // 오른쪽 배열의 제일 끝 인덱스

        // i는 왼쪽 배열 인덱스, j는 오른쪽 배열 인덱스, k는 tmp 배열 삽입 인덱스
        let i = left, j = mid, k = left;

        // 왼쪽 배열 범위 : [left, mid)
        // 오른쪽 배열 범위 : [mid, right)
        // 즉 각 인덱스가 범위 사이에 있는 동안 merge 진행
        while(i < mid && j < right){
            if(arr[i] <= arr[j]){
                tmp[k++] = arr[i++];
            }else{
                tmp[k++] = arr[j++];
            }
        }

        // 남는 값 집어 넣기
        while(i < mid) tmp[k++] = arr[i++];
        while(j < right) tmp[k++] = arr[j++];
    }
    // 복사 대신 깊은 참조(포인터 서로 변경)
    const swap = arr; arr = tmp; tmp = swap; 
}
let out  = '';
for (let i = 0 ; i < n ; i ++) out += arr[i] + '\n';
process.stdout.write(out);