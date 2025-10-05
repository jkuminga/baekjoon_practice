const rl = require('readline').createInterface({
    input : process.stdin, output :process.stdout
});


const digits= {};
for(let i=0;i<10;i++) digits[i.toString()] = i;
for(let i=0;i<26;i++) digits[String.fromCharCode(65+i)] = 10 +i;

let b, n;

let input = [];

rl.on('line',(line)=>{
   input.push(line.split(' '));
}).on('close',()=>{
    n = input[0][0].toUpperCase();;
    b = parseInt(input[0][1]);

    var len = n.length - 1;

    var result = 0;

    for(var i = len ; i >= 0; i--){
        result += digits[n[i]] * b**(len-i);
    }

    console.log(result);


})


