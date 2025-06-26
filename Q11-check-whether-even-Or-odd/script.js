//Accept an integer and  check whether it is even number or odd.

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
if(num % 2 == 0){
    console.log(`${num} is a even number`);
}else{
    console.log(`${num} is a odd number`);
}
