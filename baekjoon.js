// 1193 분수 찾기
// 일단 현재 아이디어
// 레이어 n 의 노드 개수 = (분자 + 분모) -1 개 = n 
// 레이어 n의 진행방향 -> n이 짝수일 때 1/(n+1) 부터 (n+1) / 1 방향
// 그래서 일단 타겟 넘버가 위치하는 레이어를 구한 후 그 레이어 위에서 배열을 구해서 리턴하는 방향으로 진행
// ex) 13-> 5번 레이어 -> 11~15 까지 배열 나열 1/5, 2/4, 3/3, 4/2, 5/1


const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
});

function createFractionsList(layer){
    var list = [];
    for(var i = 0 ; i <layer; i ++){
        list.push(`${i+1}/${layer - i}`)
        // console.log(list)
    }
    if(layer% 2 == 1) list.reverse();

    return list;
}

rl.on('line', (line)=>{
    var input = line.trim();

    var currentLayer = 1;
    var totalNodeCount = 1;


    while(true){
        if(input === '1') break;
        currentLayer += 1;
        totalNodeCount += currentLayer;

        // console.log(`현재 ${currentLayer}이고, 총 ${totalNodeCount}의 노드가 쌓여있습니다.`)

        if(totalNodeCount >= input) {
            input = input - (totalNodeCount - currentLayer);
            break;
        }
    }

    // console.log(`타겟 값 ${input}은 현재 레이어 ${currentLayer} 위에 위치하고 있습니다.`)

    var currentLayerFractionsList = createFractionsList(currentLayer);

    // console.log(currentLayerFractionsList);

    // console.log(`${currentLayerFractionsList}의 ${input}값 찾기`)
    console.log(currentLayerFractionsList[input-1]);
})