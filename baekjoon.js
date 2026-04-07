/* ==============================================================================
▶︎ 20920 - 영단어 암기는 괴로워
https://www.acmicpc.net/problem/20920

▶︎ 개요
영단어를 효율적으로 외우기 위해서, 아래와 같은 우선순위를 가진 단어장을 만들고자 한다.

1. 자주 나오는 단어일수록 앞에 배치
2. 해당 단어의 길이가 길수록 앞에 배치
3. 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치

단, 길이가 M 이상인 단어들만 외운다.

▶︎ 입력
- 첫째 줄에는 영어 지문에 나오는 단어의 개수 N과 외울 단어의 길이 기준인 M 이 주어진다.
  (1 <= N <= 100,000  /  1 <= M <= 10)
- 둘째 줄부터 N + 1 번째 줄까지 외울 단어를 입력받는다.(모두 소문자이며 길이는 10 이하)
  
▶︎ 출력
- 외워야 할 단어들을 순서에 맞게 하나씩 출력한다.


▶︎ 아이디어
============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const words = [];

const countMap = new Map();

// M 이상 단어 추출 + 나온 횟수 측정
for(let i = 1; i <= N; i++){
  if(inputs[i].length >= M){
    if(countMap.has(inputs[i])){
      countMap.set(inputs[i], countMap.get(inputs[i]) + 1);
    }else{
      countMap.set(inputs[i], 1);
    }
  }
}

let wordList = Array.from(countMap);

wordList = wordList.sort((a, b)=>{
  if(a[1] < b[1]){
    return 1;
  }

  if(a[1] === b[1]){
    if(a[0].length < b[0].length){
      return 1
    }else if(a[0].length === b[0].length){
      if(a[0] > b[0]) return 1
      else return -1
    }else return -1
  }
  
  if(a[1] > b[1]) return -1
})

const answers = [];

for(const w of wordList) answers.push(w[0])

console.log(answers.join('\n'))

