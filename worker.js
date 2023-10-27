onmessage= function(message){
// console.log(message);
let sum = 0;
for(i=0;i<1000000000;i++){
    sum+= i;
    postMessage(sum);
}
}