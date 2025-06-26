//Print the sum of all even & odd numbers in a range seperately.

const prompt = require("prompt-sync")();
let odd = 0;
let even = 0;
let n = Number(prompt("Enter number upto: "));
for(let i = 1;i <=n; i++){
    if(i % 2 == 0){
        even = even + i;
    }else{
        odd = odd + i;
    }
}
console.log(even);
console.log(odd);