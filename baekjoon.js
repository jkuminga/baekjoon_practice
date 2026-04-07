/* ==============================================================================
▶︎ 27433 - 팩토리얼 2
https://www.acmicpc.net/problem/27433

▶︎ 개요
0보다 크거나 같은 정수 N 이 주어질 때 N!을 출력하는 프로그램 작성

▶︎ 입력
첫째 줄에 정수 N(0 ≤ N ≤ 20)이 주어진다.

▶︎ 출력
첫째 줄에 N!을 출력한다.

▶︎ 아이디어
재귀 함수 이용
============================================================================== */
const fs = require('fs')
const N = Number(fs.readFileSync(0, 'utf8').trim());

function factorial(x){
  if ( x <= 1 ) return 1;
  return x * factorial(x - 1);
  
}
console.log(factorial(N));