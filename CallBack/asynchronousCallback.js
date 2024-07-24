function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 1000);
}

function processData() {
  console.log("Processing Data");
}

console.log("Start");
fetchData(processData);
console.log("End");
