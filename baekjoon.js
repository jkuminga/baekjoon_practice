/* ==============================================================================
▶︎ 1037 - 약수
https://www.acmicpc.net/problem/1037

▶︎ 개요
양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 어떤 수 N의 진짜 약수가
모두 주어질 때, N을 구하는 프로그램을 작성하시오.

▶︎ 입력
- 첫째 줄에 N의 진짜 약수 개수가 주어진다. (50보다 작거나 같은 자연수)
- 둘째 줄에는 N의 진짜 약수들이 주어진다. (1,000,000 보다 작거나 같고, 2보다 크거나 같은 자연수)

▶︎ 출력
첫째 줄에 N을 출력한다.

▶︎ 아이디어
- 모든 진짜 약수들의 최솟값 * 최댓값 = N
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = inputs[0];
const elements = inputs.slice(1);

const minE = Math.min(...elements);
const maxE = Math.max(...elements);

console.log(minE * maxE);