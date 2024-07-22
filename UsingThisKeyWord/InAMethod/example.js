// When "this" used in a method, it refers to the object the method is called on

const person = {
  name: "Dat",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello Dat
