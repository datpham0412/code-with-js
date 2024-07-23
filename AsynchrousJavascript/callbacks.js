// A callback is a function that passed as an argument to another function
// and is executed after some operation has been completed

function fetchData(hello) {
  setTimeout(() => {
    hello("Data Fetched");
  }, 1000);
}

console.log("Start");
fetchData((hello) => {
  console.log(hello);
});
console.log("End");

// Output:
// Start
// End
// Data fetched
