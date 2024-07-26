const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 1000);
});

async function chainPromises() {
  try {
    const result1 = await firstPromise;
    console.log(result1); // Logs: "First Promise"
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second Promise");
      }, 1000);
    });
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
}
chainPromises();
