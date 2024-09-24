//methods associated with javascript arrays 

const testArray = [2,3,4,7,10,12,16]

// when the testArray is created there are many built in methods are created to array , those can be accessed by prototypes

console.log(testArray.find((element) => element > 10));
console.log(testArray.some((element) => element > 10));
console.log(testArray.filter((element) => element > 10));
console.log(testArray);
const map1 = testArray.map((x) => x * 2); // map method will not mutate the original array , it return the new array.

console.log(map1);
console.log(testArray);

//sort method
const sortInputarrayString = ['wed','sunday','friday'] 
sortInputarrayString.sort()
console.log(sortInputarrayString)
const sortInputarray = [10,3,40,18] 
console.log(sortInputarray.sort()) //[ 10,18,3,40] 
//array.sort works directly on string but for numbers  we cant directly use them like array.sort(sortInputarray)
//if we want to sort the numbers using array.sort method we have to use the define the comparator function 

function comparator (a,b){
return b-a;
}

console.log(sortInputarray.sort(comparator)); // with this we will get the sorted numbers 

//ARRAY.REDUCE () METHOD 
const testarrayReduce = [1,-3,5,6,-2]

 const sum = testarrayReduce.reduce((acc,curr) =>{
return acc + curr
})

console.log(sum ,'reduce method');


