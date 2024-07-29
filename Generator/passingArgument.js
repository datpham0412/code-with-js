function* generatorWithArgs() {
  const first = yield 1;
  const second = yield first + 2;
  yield second + 3;
}

const gen = generatorWithArgs();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next(4)); // { value: 6, done: false }
console.log(gen.next(10)); // { value: 13, done: false }
console.log(gen.next()); // { value: undefined, done: true }
