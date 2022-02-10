const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a number:");

let num = Number(prompt("> "));

console.log('\n')

console.log(num);

while (num < 100) {
    num = num * 2;
    console.log(num);
}