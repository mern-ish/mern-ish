//Check if the number is Prime or not.

const prompt = require("prompt-sync")();
let num = prompt("Enter number: ");

for(let i = 2;i <= num/2;i++){
    if(num % i == 0 ){
        console.log("Not a prime number");
        break;
    }
    else{
        console.log("prime number");
        break;
    }
   
}