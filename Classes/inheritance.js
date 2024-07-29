// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog1 = new Dog("Naot", "Pitbull");
dog1.speak(); // Output: Naot barks
