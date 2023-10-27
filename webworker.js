// Web Workers in JavaScript provide a way to run code in the background thread separate from the main
//  execution thread of a web page. This allows you to perform tasks concurrently without blocking the user 
//  interface and improving the overall responsiveness of the web application.

const worker = new Worker('worker.js');
const add = document.querySelector("#addbtn");
const changeBg = document.querySelector("#changebg");

add.addEventListener("click",(e)=>{

worker.postMessage("hello worker");
});

worker.onmessage = function(message)
{
    // console.log(message);
    alert(`sum is ${message.data}`);

}

changeBg.addEventListener("click",()=>{
    if(document.body.style.background!='green')
    document.body.style.background='green';
else
document.body.style.background="blue"
})
