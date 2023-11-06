//Asynchronous : async is keyword which is defining function and aync functin always return a promise , tasks are independently run , they dont wait for the one task to complete rather they all run seperate path

//Callbacks : function which is calling another function inside it .

//eg
function a(arg1) {
  console.log("function a ");
  arg1();
}

function b() {
  console.log("function b");
}

a(b);

//async function

async function hero() {
  return "Jashvik";
}

const heroName = hero();
console.log(heroName); // function with out async gives result as jashvik and with async will return promise

heroName.then((res) => console.log(res)); //handling promises without await

//whn promise is passed to async function as its return it will not form a promise again

//async and await used to handle promises , await can only be used inside async

const demo_promise = new Promise((resolve, reject) => {
  resolve("simple promise demo");
});

async function handlePromise() {
  const val = await demo_promise;
  console.log(val);
}

handlePromise();

// demonstrating handlng promise with normal way and using await , and diffences b/w them

const demo_promise_await = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This will print after 10 secs ");
  }, 10000);
});


async function demo_with_await() {
    const res = await demo_promise_await; // will wait till the promise resolved then only execution moves to next line 
    console.log("some other statements")
    console.log(res);
  }
  demo_with_await();


  async function demo_withOut_await() {
    demo_promise_await.then((data)=> console.log(data))   //will not wait for the promise to resolve, next staments gets executed  
    console.log("some other statements will print first ")
    // console.log(res);
  }

  demo_withOut_await();

  

const API_URL = "https://api.github.com/users/Sushma21s";
async function getUserInfo(){
  try {
  const user = await  fetch(API_URL)
  const userdata = await user.json();
  console.log(userdata);
  }
  catch(err){
console.log(err);
  }
}  

getUserInfo();