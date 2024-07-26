async function consumePromise() {
  try {
    const result = await promise;
    console.log(result); // Logs: "Operation completed successfully"
  } catch (error) {
    console.log(error); // If the promise is rejected, logs: "Operation failed"
  } finally {
    console.log("Promise has been settled (either fulfilled or rejected)");
  }
}

consumePromise();
