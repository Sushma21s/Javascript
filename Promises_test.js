//callbacks : function passed as an arguement to another function to achieve async operations in js, but when callback functions are nested and dependent on other it leades to calllback hell and inversion of control .

//Promises : are used to handle async operations in javascript.

//definition : It is a placeholder object where the result of an asynchronous operation, either a successful outcome or a failure, can be observed.

const somedata = ["data1", "data2", "data3"];

// mainfunction(function () {
//   callbackfunction();
// });                           //call back function without promise


// const promise = mainfunctionwithPromise() //creates empty object

// promise.then(function(){
//   anotherfunction()
// })

//promises gives the guarantee that function will be called definitely and code control will be in the hand of developer 


const API_Call = 'https://api.github.com/users/Sushma21s';

const user = fetch(API_Call); //console.log(user) logs the promise 

//promise has states : 1. pending 2. fulfilled 3. Rejected 



//with the call backs code looks bigger and it lead to call back hell 


// asyncOperation1(function () {
//   asyncOperation2(function () {
//     asyncOperation3(function () {
//       console.log("All operations completed");
//     });
//   });
// });


//we can overcome this by promise chaining 


// asyncOperation1()
//   .then(result1 => asyncOperation2(result1))
//   .then(result2 => asyncOperation3(result2))
//   .then(result3 => {
//     console.log("All operations completed with result:", result3);
//   })
//   .catch(error => {
//     console.error("An error occurred:", error);
//   });



  //creating Promises


  const cart = ['dress','jacket', ' mobiles']


  function CreateOrder (){
    const P = new Promise(function(resolve,reject){
      if(1==2)resolve ('its true')
      reject('false')
    })
    return P
  }

  const cartPromise = CreateOrder()

  cartPromise.then((result)=>
console.log(result)
  ).catch((error) => {
    console.log(error); // Output: Error fetching data
  });


