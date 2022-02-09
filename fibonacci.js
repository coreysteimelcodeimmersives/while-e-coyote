const prompt = require('prompt-sync')();

console.log("Enter a value for 'n' where 'n' is the number of values of the fibonacci sequence to be displayed.");

let n = Number(prompt("> "));

console.log("\n");

let count = 0;

let fibo = 0;

let fibo1 = 0;

let fibo2 = 1;

while (count !== n){

    console.log(fibo);

    if (count === 1){
        fibo1 = 0;
    }
    
    fibo = fibo1 + fibo2;

    fibo1 = fibo2;

    fibo2 = fibo;

    count = count + 1;

}