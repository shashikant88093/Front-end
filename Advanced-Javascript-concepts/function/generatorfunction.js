

function generstor(){
    yield 1;
    yield 2 ;
    yield 3;

}


const gen = generstor();
console.log(gen.next().value)