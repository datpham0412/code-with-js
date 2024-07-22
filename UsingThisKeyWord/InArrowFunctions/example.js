// Arrow function do not have their own 'this' contexts
// They inherit the 'this' context of the parent function

const person = {
  name: "Dat Pham",
  greet: function () {
    const innerGreet = () => {
      console.log("Hello " + this.name); // 'this' refers to the person object
    };
    innerGreet();
  },
};

person.greet(); // Output: Hello Dat Pham
