/* 
<2501 약수 구하기>
 */

const rl = require('readline').createInterface({
    input : process.stdin ,output : process.stdout
});


rl.on('line',(line)=>{
    const [number, idx] = line.split(' ').map(Number);

    var factors = []; 

    for(var i = 1 ; i <=number; i++){
        if(number % i === 0 ) factors.push(i);
    }

    if(factors.length  < idx) console.log(0)
    else console.log(factors[idx - 1]);
})
