// Function borrowing allows one object to borrow a method from another object.
const person1 = {
  name: "Dat Pham",
  greet: function () {
    console.log(this.name);
  },
};

const person2 = {
  name: "Sxard",
};

// Borrowing greet method from person 1
person2.greet = person1.greet;
person2.greet(); // Output: Sxard
