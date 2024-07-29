function* generatorA() {
  yield 1;
  yield 2;
}

function* generatorB() {
  yield* generatorA();
  yield 3;
  yield 4;
}

// Using the delegating generator
const gen = generatorB();

console.log(gen.next()); // { value: 1, done: false };
console.log(gen.next()); // { value: 2, done: false };
console.log(gen.next()); // { value: 3, done: false };
console.log(gen.next()); // { value: 4, done: false };
console.log(gen.next()); // { value: undefined, done: true };
