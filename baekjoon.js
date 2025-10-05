// 2720 세탁소  사장 동혁
// 문제 : 케이스 수 (n) 만큼 반환해 줄 거스름돈을 입력 받아, 각 거스름돈을 쿼터, 다임, 니켈, 페니읙 개수를 반환

const rl = require('readline').createInterface({
    input : process.stdin, output : process.stdout
});

const qtr = 25, dime =10, nik = 5, pen = 1;
var inputs =[];

var totalResults = [];

rl.on('line', (line)=>{
    inputs.push(parseInt(line))
}).on('close', ()=>{
    var num = inputs[0];
    var changes = inputs.slice(1, num+1);

    

    for(var i = 0; i<changes.length; i++){
        var results = [0,0,0,0];

        while(changes[i] >= qtr){
            changes[i] -= qtr;
            results[0] += 1;
            // console.log(`current change is ${changes[i]} and ${results[0]}`)
        }

        while(changes[i] >= dime){
            changes[i] -= dime;
            results[1] += 1;
            // console.log(`current change is ${changes[i]} and ${results[1]}`)
        }
        while(changes[i] >= nik){
            changes[i] -= nik;
            results[2] += 1;
            // console.log(`current change is ${changes[i]} and ${results[2]}`)
        }
        while(changes[i] >= pen){
            changes[i] -= pen;
            results[3] += 1;
            // console.log(`current change is ${changes[i]} and ${results[3]}`)
        }

        console.log(...results)
    }

})