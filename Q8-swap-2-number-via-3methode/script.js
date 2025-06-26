//Swap two variables via 3 method

let a = 5;
let b = 10;

//without 3^rd variables
console.log("Before swap\n","a = ",a,"b = ",b);
console.log("First Methode");
a = a + b;
b = a - b;//5
a = a - b;//10

console.log("After swap \n","a = ",a,"b = ",b);

//with 3^rd variables
console.log("Second Method");

let c ;
c = a;
a = b;//5
b = c;//10
console.log("With 3^rd variables after swapping \n","a = ",a,"b = ",b);

console.log("Third Method");
[a,b]=[b,a];
console.log("After swapping \n","a =",a,"b =",b);




