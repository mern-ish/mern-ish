//Take a number as input and print its table.

const prompt = require("prompt-sync")();
let n = prompt("Enter number: ");
for(let i = 1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
}