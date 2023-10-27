//Generators: A generator is a process that can be paused and resumed and can yield multiple values. it suspends the execution until we call the yield
//A generator in JavaScript consists of a generator function, which returns an iterable Generator object. yeild has 2 properties value and done 

function* generator_demo(){
    yield 1;
    yield 2;
    yield 3;
}

const gener = generator_demo();
// console.log(gener); //we'll get function suspended

// console.log(gener.next());


function* generator_num(){
    let a =0 ;

    while (true){
        a++;
      yield  a;
    }
}

const num_obj = generator_num();
console.log(num_obj.next());
console.log(num_obj.next());
