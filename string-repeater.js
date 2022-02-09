const prompt = require('prompt-sync')();

console.log("Enter a string:");

let letters = prompt("> ");

console.log('\n')

let ogLetters = letters;

let letterCount = letters.length;

console.log(letters);

while (letterCount < 10) {  
    
    letters = letters + ogLetters;

    letterCount = letters.length;

    console.log(letters);

}