/* ==============================================================================
▶︎ 24060 - 알고리즘 수업 - 병합 정렬 1
https://www.acmicpc.net/problem/24060

▶︎ 개요
병합 정렬로 배열을 오름차순으로 정렬하는 경우 배열 A에 K 번째 저장되는 수를 구하자.

▶︎ 예시
4 5 1 3 2 -> 4 5 1 3 2 -> 4 5 1 3 2 -> 1 5 1 3 2 -> 1 4 1 3 2 -> 1 4 5 3 2 
-> 1 4 5 2 2 -> 1 4 5 2 3 -> 1 4 5 2 3 -> 1 2 5 2 3 -> 1 2 3 2 3 -> 1 2 3 4 3 
-> 1 2 3 4 5. 총 12회 저장이 발생하고 일곱 번째 저장되는 수는 3이다.

▶︎ 입력
- 첫번 째 줄에 배열 A의 크기 N(5 ~ 500 000), 저장 횟수 K(1 ~ 10^8)이 주어진다.
- 다음 줄에 서로 다른 배열 A의 원소 An이 주어진다.(1 <= An <= 10^9)

▶︎ 출력
배열 A에 K 번째 저장되는 수를 출력한다. 저장 횟수가 K보다 작으면 -1을 출력한다.

============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = inputs[0];
const K = inputs[1];
const list = inputs.slice(2);

const logs = [];

function mergeSort(A, p, r) {
    // p가 r보다 작을 때만 실행 (배열의 크기가 1보다 클 때)
    if (p < r) {
        const q = Math.floor((p + r) / 2); // 중간 지점 계산
        mergeSort(A, p, q);                // 전반부 정렬
        mergeSort(A, q + 1, r);            // 후반부 정렬
        merge(A, p, q, r);                 // 병합
    }
}

function merge(A, p, q, r) {
    let i = p;
    let j = q + 1;
    let t = 0; // JS 배열은 0부터 시작하니까 t는 0으로 초기화
    const tmp = []; // 임시 배열

    // 양쪽 배열을 비교하면서 작은 것부터 tmp에 채워 넣기
    while (i <= q && j <= r) {
        if (A[i] <= A[j]) {
            tmp[t++] = A[i++];
        } else {
            tmp[t++] = A[j++];
        }
    }

    // 왼쪽 배열 부분이 남은 경우 몽땅 tmp에 털어넣기
    while (i <= q) {
        tmp[t++] = A[i++];
    }

    // 오른쪽 배열 부분이 남은 경우 몽땅 tmp에 털어넣기
    while (j <= r) {
        tmp[t++] = A[j++];
    }

    // 정렬된 결과를 원래 배열 A의 [p..r] 구간에 덮어쓰기
    i = p;
    t = 0;
    while (i <= r) {
        // A[i++] = tmp[t++];
        A[i] = tmp[t];
        logs.push(tmp[t]);
        i++; t++;
    }
}




mergeSort(list, 0, list.length - 1);


(logs.length < K) ? console.log(-1) : console.log(logs[K - 1]);


