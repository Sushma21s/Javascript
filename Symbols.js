//symbols : is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.its a ES6 featue.


let s =Symbol("Symbol example");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol('test');
let s3 = Symbol('test');

console.log(s2===s3); //it returns false even the args are same because symbol always create a unique ID

let s4 = Symbol.for('reg symbol');
let s5 = Symbol.for('reg symbol');

console.log(s4===s5);
console.log(Symbol.keyFor(s4));

//use symbols in object property 

let name = Symbol();
let person = {
    [P_name]:"jones"
}

console.log(Object.getOwnPropertySymbols(person));