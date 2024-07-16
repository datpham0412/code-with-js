function checkString(str) {
  if (typeof str !== "string") {
    throw TypeError("Expected a string");
  }
  return str;
}

try {
  let result = checkString(123);
  console.log(result);
} catch {
  console.log("Error: " + error.message);
}
