// Create a promise using 'Promise' constructor, which takes a function (executor) with two arguments:
// resolve and reject. The executor function is invoked immediately by the promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Promise was successful!");
    } else {
      reject("Promise was not successful");
    }
  }, 1000);
});

console.log(promise);
