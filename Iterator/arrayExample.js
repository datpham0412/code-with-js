const array = [10, 20, 30];

const arrayIterator = array[Symbol.iterator]();

console.log(arrayIterator.next()); // { value: 10, done: false }
console.log(arrayIterator.next()); // { value: 20, done: false }
console.log(arrayIterator.next()); // { value: 30, done: false }
console.log(arrayIterator.next()); // { value: undefined, done: true }
