function first() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First");
      resolve();
    }, 1000);
  });
}

function second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second");
      resolve();
    }, 1000);
  });
}

function third() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third");
      resolve();
    }, 1000);
  });
}

first()
  .then(second)
  .then(third)
  .then(() => {
    console.log("All done");
  });
