// 'async'/'await' is syntactic sugar built on top of promises, making asynchronous
// code look and behave more like synchronous code, making it easier to read and write

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function asyncFunction() {
  console.log("Start");
  const data = await fetchData();
  console.log(data);
  console.log("End");
}

asyncFunction();
