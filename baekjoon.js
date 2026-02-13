/* ==============================================================================
▶︎ 1181 - 단어 정렬

▶︎ 개요
- 알파벳 소문자로 이루어진 N개의 단어가 들어오면 길이 순으로 정렬하고 길이가 같으면 사전으로 정렬하는 사전 프로그램 작성
- 중복된 단어는 하나만 남기고 제거해야 함

▶︎ 입력
- 첫 줄에 단어의 개수 N (N <= 20,000)
- 두 번째 줄부터 N개의 단어가 주어진다.(단어는 소문자이며 길이가 50을 넘지 않는다.)
 
▶︎ 출력
- 첫 줄부터 조건대로 나열된 단어들을 출력한다.

▶︎ 아이디어
- 단어의 길이가 최대 50이므로 동일한 길이의 단어가 들어갈 경우가 더 많을 것
  -> 길이가 같은 단어 정렬부터 생각해보자.

▶︎ 개선방향
============================================================================== */
// 1. 배열 전처리
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(data[0]);

let arr = [];
for(var i = 0 ; i < n ; i ++) arr.push(data[i + 1]);

// 중복 없애기
const arrToSet = new Set(arr);
let uniqueArr = [...arrToSet];
n = uniqueArr.length;

// 빈 배열 생성 - 각 요소에는 길이가 n인 단어들이 들어갈 것
const tmp = Array.from({length: 50}, ()=>[]);

for(var i = 0; i < n ; i ++){
  tmp[uniqueArr[i].length - 1].push(uniqueArr[i]);
}

for(var i = 0; i < 50 ; i++){
  if(tmp[i].length !== null) tmp[i].sort();
}


let out = ''
for(var i = 0 ; i < 50; i++){
  if(tmp[i].length !== null){
    for(var j = 0 ; j < tmp[i].length ; j++){
      out += tmp[i][j] + '\n';
    }
  }
}

process.stdout.write(out);
