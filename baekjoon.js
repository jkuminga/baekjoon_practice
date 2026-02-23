/* ==============================================================================
▶︎ 1620 - 나는야 포켓몬 마스터 이다솜

▶︎ 개요
- 포켓몬 도감을 받고 문제를 맞추는 프로그램을 만들자.

▶︎ 입력
- 첫째 줄에는 도감에 등록된 포켓몬의 개수 N개와 내가 맞춰야 하는 문제 개수 M이 주어짐[1, 100,000]
- 두번째 줄부터 N개의 포켓몬이 등록됨(모두 영어, 첫 글자만 대문자, 최대길이는 20, 각 인덱스가 포켓몬 번호, 1부터 시작)
- 그 다음 줄 부터 M개의 줄에 문제 입력, 숫자 혹은 포켓몬 이름(숫자는 N보다 작고, 포켓몬이름은 반드시 도감 안에 존재함)

▶︎ 출력
- 첫째 줄부터 차례대로 각 문제에 대한 답을 출력
  -> 숫자면 숫자에 해당하는 포켓몬 이름 / 이름이면 이름에 해당하는 포켓몬 숫자

▶︎ 아이디어

============================================================================== */
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const pokemonCount = Number(data[0]);
const questionCount = Number(data[1]);
const pokedex = data.slice(2, pokemonCount+2);
const questions = data.slice(pokemonCount+2)

const listToMap = new Map();
for(var i = 0 ; i < pokemonCount ; i ++) listToMap.set(pokedex[i], i+1);


for(var i = 0 ; i < questionCount; i++){
  // 문제가 이름을 물어보는 거면 숫자를 출력
  if(isNaN(Number(questions[i]))){
    console.log(listToMap.get(questions[i]));
  // 문제가 숫자를 물어보는 거면 이름을 출력
  }else{
    console.log(pokedex[questions[i] - 1]);
  }
}

