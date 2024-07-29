const string = "hello";

const stringIterator = string[Symbol.iterator]();

console.log(stringIterator.next()); // { value: 'h', done: false }
console.log(stringIterator.next()); // { value: 'e', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'o', done: false }
console.log(stringIterator.next()); // { value: 'undefined', done: true }
