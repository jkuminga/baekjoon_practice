// 2292 벌집
// 1번 노드 기준 해당 노드까지의 최단 거리 : 1번 노드부터 해당 노드가 위치한 레이어까지의 개수
// 각 레이어의 개수 : 6*(n-1)개

const rl = require('readline').createInterface({
    input: process.stdin, output : process.stdout
});

var targetNode;

rl.on('line', (line)=>{
    targetNode = parseInt(line);

    rl.close();
}).on('close',()=>{
    var totalNodes = 1; // 현재 레이어까지 총 노드 개수
    var layer = 1; // 현재 레이어
    
    while(true){
        if(targetNode ===1) break; // 입력한 타겟 노드가 1이면 그대로 1출력
        layer ++; // 레이어 개수 하나 증가
        totalNodes = totalNodes + 6*(layer - 1 ); //레이어 증가에 따른 해당 레이어의 노드 개수 만큼 총 노드 개수에 추가

        if(targetNode <= totalNodes) break; // 타겟 노드가 현재 총 노드 수보다 작으면 리턴
    }

    console.log(layer); //1번부터 타겟노드까지 최단 거리 : 타겟노드가 위치한 레이어 

})