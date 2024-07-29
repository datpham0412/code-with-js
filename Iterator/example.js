// Creating a simple iterator

const simpleIterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

// Using the iterator
let result = simpleIterator.next();
while (!result.done) {
  console.log(result.value); // Output: 0 1 2 3 4 5
  result = simpleIterator.next();
}
