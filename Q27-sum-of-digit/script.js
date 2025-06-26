//sum of digit
const prompt = require("prompt-sync")();
let num = prompt("Enter digit: ");
let sum = 0;
while(num > 0){
    let n;
    n =(num % 10);
    sum = sum + n;
    num = Math.floor(num/10);   
}
console.log(sum);