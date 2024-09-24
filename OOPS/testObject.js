//in this file we have the all the possible methods associated with object creation 

let user = {          //object
    "username" :"abc",
    "age":20
}
console.log(user,"user before adding")
//lets add the one more property to the above object 

user.email = 'abc@example.com'; //method 1 

Object.assign(user, { address: 'mysore' }); // method 2

user = { ...user, phoneNo: '9999999999' }; // method 3



console.log(user,"user after adding")

//deleting the property from object 

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
  };
  console.log("before delete",person)
  
  delete person.age;

  console.log("after delete",person)

