// Promises provide a cleaner, more flexible way to handle asynchronous operation compared to callbacks.
// A promise represents a value that maybe available now, in the future, or never

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

console.log("Start");
fetchData().then((data) => {
  console.log(data);
});
console.log("End");
