// Creating an array using array literals
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Creating an array using array constructor
let numbers = new Array(1, 2, 3, 4);
console.log(numbers);

// Common array methods
// Adding an element to the end of the array
fruits.push("Orange");
console.log(fruits);

// Removing the last element from the array
fruits.pop();
console.log(fruits);

// Adding an element to the beginning of the array
fruits.unshift("Mango");
console.log(fruits);

// Mapping through the array
let listNumber = [1, 2, 3];
let squares = listNumber.map((x) => x * x);
console.log(squares);

// Filtering an array
let evenNumbers = numbers.filter((x) => x % 2 === 0); // [2]
console.log(evenNumbers);

// Reducing an array
let sum = numbers.reduce((x, y) => x + y); // 10
console.log(sum);

// Iterating over an array
fruits.forEach((fruit) => console.log(fruit));
