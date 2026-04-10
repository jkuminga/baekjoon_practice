/* ==============================================================================
▶︎ 4779 - 칸토어 집합
https://www.acmicpc.net/problem/4779

▶︎ 개요
칸토어 집합 : 0~1 사이 실수로 이루어진 집합으로, 구간 [0, 1]에서 시작해서 각 구간을 3등분하여 
가운데 구간을 반복적으로 제외하는 방식으로 만들어짐

▶︎ 예시
1. - 가 3^N 개 있는 문자열에서 시작
2. 문자열을 3등분 한 뒤, 가운데 문자열을 공백으로 바꾼다. 이렇게 하면 선이 2개가 남는다.
3. 각 선을 3등분하고, 가운데 문자열을 공백으로 바꾼다.
4. 모든 선의 길이가 1이 될 때 까지 계속한다.


▶︎ 입력
- 각 줄에 N이 주어진다.(0 ~ 12)

▶︎ 출력
- 입력으로 주어진 N에 대해서, 해당하는 칸토어 집합의 근사를 출력한다.

▶︎ 아이디어
// 27
// recursion(char, 0, 26) (div = 9)
//  ㄴ recursion(char, 0, 8) (div = 3)
//      ㄴ recursion(char, 0, 2) (div = 1)
//          ㄴ recursion(char, 0, 0) // no
//          ㄴ recursion(char, 2, 2) // no
//          ㄴ cantor(char, 1, 1) 
//      ㄴ recursion(char, 6, 8) (div = 1)
//          ㄴ recursion(char, 6, 6) // no
//          ㄴ recursion(char, 8, 8) // no
//          ㄴ cantor(char, 7, 7)   
//      ㄴ cantor(char, 3, 5)          
//  ㄴ recursion(char, 18, 26) (div = 3)
//      ㄴ recursion(char, 18, 20) (div = 1)
//          ㄴ recursion(char, 18, 18) // false
//          ㄴ recursion(char, 20, 20) // false
//          ㄴ cantor(char, 19, 19) 
//      ㄴ recursion(char, 24, 26) (div = 1)
//          ㄴ recursion(char, 24, 24)
//          ㄴ recursion(char, 26, 26)
//          ㄴ cantor(char, 25, 25)
//      ㄴ cantor(char, 21, 23)
//  ㄴ cantor(char, 9, 17)

============================================================================== */
const fs = require('fs');
const inputs = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);


function recursion(char, start, end){
    let div = (end - start + 1) / 3;
    
    if(1 <= div){
        recursion(char, start, start + div - 1);
        recursion(char, end - div + 1, end)
        cantor(char, start + div, end - div);
    }
}

function cantor(char, left, right){
    let i = left;
    let j = right;
    

    while(i <= j){
        char[i] = " "
        i++
    }
}


const answers = [];

for(const n of inputs){
    let char = Array(3**n).fill('-')
    recursion(char, 0, char.length - 1)
    answers.push(char.join(''));
}

console.log(answers.join('\n'))