//Bijli Bill

// up to 100          4.2/unit
// 101-200            6/unit
//201 -400            8/unit
// more than 400      13/unit

const prompt = require("prompt-sync")();
let unit = prompt("Enter the unit: ");
let bill;
if(unit > 0 && unit <=100){
    bill = unit * 4.2;
}else if(unit > 101 && unit <= 200){
    bill = 100 * 4.2 + (unit-100)*6 ;
}else if(unit > 201 && unit <= 400){
    bill = ((unit-200)*8) + 100*6 + 100*4.2;
}else{
    bill = ((unit-400)* 13) + 200*8 + 100*6 + 100*4.2;; 
}

console.log(bill);
