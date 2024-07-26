console.log("Start");

const intervalID = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

console.log("End");

setTimeout(() => {
  clearInterval(intervalID);
  console.log("Clear interval");
}, 10000);
