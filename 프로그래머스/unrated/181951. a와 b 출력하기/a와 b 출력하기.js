const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num1 = Number(input[0]);
    let num2 = Number(input[1])
    // console.log(Number(input[0]) + Number(input[1]));
    console.log(`a = ${num1}`)
    console.log(`b = ${num2}`)
});