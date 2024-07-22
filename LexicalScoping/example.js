// Lexical Environment

function outerFunction() {
  let outerVar = "I am outside";

  function innerFunction() {
    let innerVar = "I am inside";

    function nestedFunction() {
      console.log(outerVar); // "I am outside"
      console.log(innerVar); // "I am inside"
    }
    nestedFunction();
  }
  innerFunction();
}
outerFunction();
