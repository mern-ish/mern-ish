//Shop Discount
// 0-5000               0%
// 5001 -7000           5%
// 7001 - 9000          10%
// more than 9000       20%

const prompt = require("prompt-sync")();
let amount = prompt("Enter initial amount: ");
let dis,newAmount;
if(amount > 0 && amount <= 5000){
    dis = 0;
}else if(amount > 5001 && amount <= 7000){
    dis = 5;
}else if(amount > 7001 && amount <= 9000){
    dis = 10;
}else {
    dis = 20;
}

newAmount = amount - (amount*dis/100);
console.log("New amount after discount: ",newAmount);