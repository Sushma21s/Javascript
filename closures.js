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