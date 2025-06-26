//Factorial of a number
// 5 = 1*2*3*4*5=120
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter number: "));
let fact = 1;
for(let i = 1;i <= num;i++){
    fact = fact * i;
}
console.log(`Factorials of ${num} = ${fact}`);