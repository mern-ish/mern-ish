//Accept name and age from the user.check if the user is a valid voter or not.
const prompt = require("prompt-sync")();

let user = String(prompt("Enter name: "));
let age = Number(prompt("Enter age: "));
if(age >= 18){
    console.log(`${user} is a ${age} year old and Valid voter`);
}else{
    console.log(`${user} is a ${age} year old. And Under age can't vote`);
}