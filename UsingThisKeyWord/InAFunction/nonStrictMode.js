function showThis() {
  console.log(this); // 'this' refer to global object
}

showThis(); // Output: [object Window] in browsers
