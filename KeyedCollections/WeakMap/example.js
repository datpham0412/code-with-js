let weakMap = new WeakMap();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

// Adding key - value pairs:
weakMap.set(obj1, "Developer");
weakMap.set(obj2, "Designer");

// Retrieving values:
console.log(weakMap.get(obj1)); // Output: "Developer"
console.log(weakMap.get(obj2)); // Output: Designer

// Checking for keys:
console.log(weakMap.has(obj2)); // Output: true;

// Deleting a key-value pair:
weakMap.delete(obj2);
console.log(weakMap.has(obj2)); // Output: false;

// Notes: Weakmaps are not iterable and do not have a size property
