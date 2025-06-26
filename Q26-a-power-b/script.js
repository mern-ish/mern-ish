//Write a program to take two inputs a, b & find the value of a raised to the power of b.

const prompt = require("prompt-sync")();
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let power = 1;
for(let i = 1;i <= b;i++){
    power = power * a;
}
console .log(power);