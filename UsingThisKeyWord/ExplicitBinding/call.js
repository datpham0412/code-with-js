function greet() {
  console.log(this.name);
}

const person = { name: "Dat Pham" };
greet.call(person);
