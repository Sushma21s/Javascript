// CALL METHOD

let Demo_name = {
    firstName :'sachin',
    lastName :'Tendulkar',
    printFulname : function (hometown){
        this.hometown = hometown;
        console.log (this.firstName + ' ' + this.lastName  +' '+ hometown )
    }
};

Demo_name.printFulname('mumbai');

let name2 = {
    firstName :'virat',
    lastName :'kohli',  
}

// to print fullname here we can borrow printfulname method from name object

Demo_name.printFulname.call(name2,'delhi');

//APPLY METHOD

//apply method is same as call method but it takes array as an arguements in the function call

Demo_name.printFulname.apply(name2,['banglore']);

//if there more arguements then the above code look like  name.printfulname.apply(name2,['banglore','karnataka','india'])


//BIND METHOD
// it will return a new function

let printMyname  = Demo_name.printFulname.bind(name2,'chennai');
console.log(printMyname);
printMyname();

//bind allows us to invoke a function later rather than immediately