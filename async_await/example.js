function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Processed ${data}`);
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data saved: ${data}`);
    }, 1000);
  });
}

async function fullExample() {
  try {
    const data = await fetchData();
    console.log(data); // Logs: "Data fetched"
    const processedData = await processData(data);
    console.log(processedData); // Logs: "Processed Data fetched"
    const savedData = await saveData(processedData);
    console.log(savedData); // Logs: "Data saved: Processed Data fetched"
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Operation completed");
  }
}

fullExample();
