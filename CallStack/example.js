function firstFunction() {
  console.log("First Function");
  secondFunction();
  console.log("First Function end");
}

function secondFunction() {
  console.log("Second Function");
  thirdFunction();
  console.log("Second Function end");
}

function thirdFunction() {
  console.log("Third Function");
}

firstFunction();
