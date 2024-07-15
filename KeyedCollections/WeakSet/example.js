let weakSet = new WeakSet();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

// Adding objects:
weakSet.add(obj1);
weakSet.add(obj2);

// Checking objects
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has({ name: "Alice" })); // Output: false (In JavaScript, objects are compared by reference, not by value.
//This means that two distinct objects with the same properties and values are not considered equal unless they reference the exact same object in memory.)

// Deleting an object:
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // Output: false

// Note: WeakSets are not iterable, so you can not use for.. of loops or other iteration methods:
