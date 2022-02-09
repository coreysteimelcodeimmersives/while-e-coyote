const prompt = require('prompt-sync')();

console.log('Enter x:');
let x = Number(prompt('> '));

console.log('Enter y:')
let y = Number(prompt('> '));

console.log('\n');

let divisble = x % y;

while (divisble !== 0){

    console.log(x+"");

    x = x +1;
    
    divisble = x % y;
    
}

console.log(x + " is divisble by " + y);