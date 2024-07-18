const Person = (name) => {
  this.name = name;
};

const p = new Person("Dat Pham");
console.log(p.name); // Output -> TypeError: Person is not a constructor
