//sum of n number.
const prompt = require("prompt-sync")();
let n = prompt("Enter number: ");
let sum = 0;
for(let i = 0; i <= n; i++){
    sum = sum + i;
}
console.log(sum);