function fetchData(callback) {
  setTimeout(() => {
    const error = null; // Simulate no error
    const data = "Data fetched";
    callback(error, data);
  }, 1000);
}

function processData(error, data) {
  if (error) {
    console.error("Error", error);
  } else {
    console.log(data);
  }
}

fetchData(processData);

// Output: 'Data fetched'
