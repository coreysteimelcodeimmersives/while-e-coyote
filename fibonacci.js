const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a value for 'n' where 'n' is the number of values of the fibonacci sequence to be displayed.");

let n = Number(prompt("> "));

console.log("\n");

let count = 0;

let fiboAns = 0;

let fibo1 = 0;

let fibo2 = 1;

while (count !== n){

    console.log(fiboAns);

    if (count === 1){
        fibo1 = 0;
    }
    
    fiboAns = fibo1 + fibo2;

    fibo1 = fibo2;

    fibo2 = fiboAns;

    count++;

}