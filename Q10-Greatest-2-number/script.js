//Accept two numbers and print the greatest between them.
const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: ")); 
if(num1 > num2){console.log(`${num1} is greater than ${num2}`)}
else{console.log(`${num2} is greater than ${num1}`)}