//strong number
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter number: "));
let num1 = num;
let strNum = 0;
while(num > 0){
    let n = num % 10;
    let i = 1;
    let fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }
    strNum = strNum + fact;
    num = Math.floor(num / 10);

}
if(num1 === strNum){
    console. log(`${strNum} is strong number.`);
    
}else{
    console.log(`${strNum} is not a strong number.`);
}