const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    let a = `${'!@#$%^&*('}`;
    let b = '\\';
    let c = `${"'"}`
    let d = `${'"<>?:;'}`
    console.log(a+b+c+d)
});