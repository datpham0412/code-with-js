// Class declaration

class Person {
    // Constructor method
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Method
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

// Creating an instance of the class
const person1 = new Person("Dat", 22);
person1.greet(); // Output: Hello, my name is Dat and I am 22 years old