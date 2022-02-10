const prompt = require('prompt-sync')({sigint: true});

console.log("Enter some numbers (type 'done' when complete): ")

let num = prompt("> ");

let total = 0;

//condition 
while (num !== 'done'){
    let num2 = Number(num)
    total = total + num2;
    num = prompt("> ");
}

console.log("Your total is: " + total);
