/* ==============================================================================
▶︎ 2108 - 통계학
https://www.acmicpc.net/problem/2108

▶︎ 개요
통계학에서 N개의 수를 대표하는 방법은 다음과 같다.
1. 산술평균 : N개의 수들의 합을 N으로 나눈 값
2. 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
3. 최빈값 : N개의 수들 중 가장 많이 나타나는 값
4. 범위 : N개의 수들 중 최댓값과 최솟값의 차이

N개의 수가 주어졌을 때, 4가지 기본 통계값을 구하는 프로그램을 작성하자.

▶︎ 입력
- 첫째 줄에 수의 개수 N(~500,000)이 주어진다. 단 N은 홀수이다.
- 둘째 줄부터 N개의 정수가 주어진다. 각 정수의 절댓값은 4,000 을 넘지 않는다.
  
▶︎ 출력
- 첫째 줄에는 산술평균을 출력(소수점 이하 첫째 자리에서 반올림)
- 둘째 줄에는 중앙값 출력
- 셋째 줄에는 최빈값 출력(여러 개 있을 때는 최빈값 중 두번 째로 작은 값을 출력)
- 넷째 줄에는 범위를 출력

▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const N = inputs[0];
const numbers = inputs.slice(1).sort((a,b) => a - b);

function getAMean(n, numbers){
  let sum = 0;
  for(const num of numbers) sum += num;
  const aMean = Math.round(sum / n);

  return aMean === -0 ? 0 : aMean;
}

function getMedian(n, numbers){
  const idx = Math.floor(n / 2);
  return numbers[idx];
}

function getMostFrequentValue(numbers){
  const counts = new Map();

  for(const num of numbers){
    if(!counts.has(num)) counts.set(num, 1) ;
    else counts.set(num, counts.get(num) + 1)
  }
  const max = Math.max(...counts.values())

  let candidates = [];
  let keys = counts.keys();

  for(const k of keys){
    if(counts.get(k) === max) candidates.push(k);
  }

  return candidates.length === 1 ?  candidates[0] : candidates[1] 
}

function getRange(numbers){
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return max - min;
}

console.log(getAMean(N, numbers));
console.log(getMedian(N, numbers));
console.log(getMostFrequentValue(numbers));
console.log(getRange(numbers));