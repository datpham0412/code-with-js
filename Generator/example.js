// Defining a generator function
function* simpleGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

// Using the generator
const generator = simpleGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: trues }

