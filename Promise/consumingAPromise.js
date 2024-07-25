// To handle the result of the promise, attach callbacks using .then() for fullfillment, .catch() for rejection
// and .finally() for actions to be performed regardless of the outcome.

myPromise
  .then((result) => {
    console.log(result); // Logs: "Operation completed successfully"
  })
  .catch((error) => {
    console.log(error); // If the promise is rejected, logs: "Operation failed"
  })
  .finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected)");
  });
