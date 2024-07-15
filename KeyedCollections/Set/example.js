// Create a set in Javascript:

let set = new Set();

// Adding values:
set.add(1);
set.add(2);
set.add(3);

// checking values
console.log(set.has(1)); // Output: true
console.log(set.has(4)); // Output: false

// Iterating over a set:
for (let value of set) {
  console.log(value); // Output: 1, 2, 3
}

// Size of the set
console.log(set.size); // Output: 3

// Deleting a value:
set.delete(2);
console.log("Set after deletion: ");
for (let value of set) {
  console.log(value);
}

// Clearing the set:
set.clear();
console.log(set.size);
