function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Dat Pham" };
greet.apply(person, ["Hello"]); // Output: Hello Dat Pham
