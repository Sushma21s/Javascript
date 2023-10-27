//HOISTING : accessing variables and functions before they are declared/initialised .


console.log(x)//gives undefined bcs memory gets allocated to var x but not the value  
var x = 'doll';
console.log(x);  //gives a doll in console
work(); // it is invoked the function before initialisation 

function work(){
    console.log('doll can work');
}


console.log(y); // referrence error
let y;
y= 'aaa';



//variables declared with var is hoisted but its intialise the undefined as a default value
