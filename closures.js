function closure_demo(){
var a = 7;
function y(){
    console.log(a);

}
y()
}
closure_demo();

//Function bundled with its lexical environment is known as a closure
//closure takes the reference not the value 
const tt= 3;

function test(){
 
    console.log(tt)
}

console.log(tt)
test()


(function (x){
    return (function (y){
    console.log(x)})(2)
    }(1))
    
    for (var i =0 ; i <3;i ++){
        setTimeout(() => {
          console.log(i)  
        }, 1);
    }