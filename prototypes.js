//whenever the objects,arrays,function are created in javascript theres a inbuilt property attached to it that is called prototype

console.log('from the prototype and prototypal inheritance');
let arr = ['apple','mango'];
// when we try to access arr . we'll get some properties like arr.concat ,arr.length ,so these are the prototypes 

let demo_objects ={
    name:'john',
    age:'30',
    getDetails: function (){
console.log(this.name + 'is' + this.age + 'years old')
    }
}

