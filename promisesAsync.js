//Asynchronous : tasks are independently run , they dont wait for the one task to complete rather they all run seperate path

//Callbacks : function which is calling another function inside it .

//eg
function a(arg1){
    console.log("function a ")
    arg1();
}

function b(){
    console.log('function b');
}

a(b);


