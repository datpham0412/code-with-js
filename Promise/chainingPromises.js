// Promises can be chained to perform multiple asynchronous operations sequentially.
// Each .then() returns a new promise, allowing for further chaining

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 1000);
});

firstPromise
  .then((result) => {
    console.log(result); // Logs: first promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second Promise");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // Logs: Second promise
  })
  .catch((error) => {
    console.error(error);
  });
