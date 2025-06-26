//Accept an integer and print hello world n times.
const prompt = require("prompt-sync")();
let n = Number(prompt("enter number: "));
for(let i = 0;i <= n;i++){
    console.log("Hello World");
}