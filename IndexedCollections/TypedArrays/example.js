// Creating a typed array using Int8Array
let int8 = new Int8Array(8); // Creates an array of 8-bit signed integers

// Creating a typed array using Uint8Array
let uint8 = new Uint8Array([1, 2, 3, 4]); // [1, 2, 3, 4]

// Creating a typed array using Float32Array
let float32 = new Float32Array([1.0, 2.0, 3.5, 4.5]); // [1.0, 2.0, 3.5, 4.5]

// Setting multiple values in a typed array
uint8.set([5, 6, 7], 2); // [1, 2, 5, 6, 7]

// Creating a subarray from a typed array
let sub = uint8.subarray(1, 3); // [2, 5]

// Slicing a typed array
let sliced = uint8.slice(1, 3); // [2, 5]
