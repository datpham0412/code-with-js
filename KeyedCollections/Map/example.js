let map = new Map();

// Adding key - value pairs:
map.set("name", "Alice");
map.set(1, "one");
map.set(true, "boolean");

// Retrieving values:
console.log(map.get("name")); // Output: "Alice"
console.log(map.get(1)); // Output: "one"

// Checking for keys
console.log(map.has("name")); // Output: true

// Iterating over the map:
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}


// Deleting a key-value pair:
map.delete("name");
console.log(map.has("name")); // Output: false

// Clearing the map:
map.clear();
console.log(map.size); //Output: 0;