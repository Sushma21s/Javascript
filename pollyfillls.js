//polyfills : filling the browser compatibility issues 

//polyfill for bind

let myname = {
    firstname:"john",
    lastname:"doe"
}

let printMyname = function(place,state){
    console.log(this.firstname +" " +this.lastname + " "+ place + " " + state)
}

let printname = printMyname.bind(myname);
printname()

//if bind method is not supported by the browser we have implement the same functionality by our code  this is called polyfills 

Function.prototype.polybind = function(...args){
    let obj = this
return function(){
 obj.call(args[0])
}
}

// let printotherName = printMyname.polybind(myname)
// printotherName();

//this polybind works same as bond method but if we pass more arguements like as firstname lastname we pass place param it will return undefined 

Function.prototype.polybind_1 = function(...args){
    let obj = this
    params = args.slice(1);
return function(...args2){
 obj.apply(args[0], [...params, ...args2]) // call is changed as apply bcz params is in array form 
}
}

let printotherName2 = printMyname.polybind_1(myname,'mysore','karnataka')
printotherName2();