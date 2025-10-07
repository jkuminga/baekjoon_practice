// 2869 달팽이는 올라가고 싶다
// 최초 제출 시에는 100 99 1000000000 입력에 대해서 시간 제한을 만족하지 못해서 실패
// 해결방안 : 등차수열식 사용
// n일동안 달팽이가 움직인 양 : An = (a-b)n
// 이 때, n일의 아침에 a만큼 움직이게 되면, 실제로 -b는 진행되지 않는 이벤트가 된다.(정상 도착 시 하강 x)
// 그러므로 an + b 가 v보다 커지는 가장 작은 n을 찾는 것이 이 문제의 해결 방법이 될 것이다.
// 이 때 반복문은 최대한 지양해야 할 것이다.
const rl = require('readline').createInterface({
    input : process.stdin, output :process.stdout
});


rl.on('line',(line)=>{
    const [a, b, v] = line.split(' ').map(Number);

    // var currentState = 0;
    // var dayCount=0;

    // while(true){
    //     dayCount += 1;
    //     // 1, a 만큼 올라가기
    //     currentState += a;
    //     // 2. a>=v면 break
    //     if(currentState >= v) break;
    //     // 3. b만큼 내려가기
    //     currentState -= b
    // };
    // console.log(dayCount);

    const n = Math.ceil((v - b) / (a-b));
    // == An + b >= v

    console.log(n);

    

}) 

