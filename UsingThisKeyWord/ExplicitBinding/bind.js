function greet() {
  console.log(this.name);
}

const person = { name: "Dat Pham" };
const boundGreet = greet.bind(person);

boundGreet(); // Output: Dat Pham
