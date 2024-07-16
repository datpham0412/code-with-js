function parseJson(jsonString) {
  try {
    // Attempt to parse the JSON string
    let result = JSON.parse(jsonString);
    console.log("Parsed JSON: ", result);
  } catch (error) {
    // Handle any error that occur during parsing
    console.log("An error occured while parsing JSON: ", error.message);
  } finally {
    // This block will always execute
    console.log("Finised parsing attempt");
  }
}

// Valid JSON string
let validJSON = '{ "name": "Dat", "age": 30}';
parseJson(validJSON);

// Invalid JSON string
let invalidJSON = '{ name: "Dat", "age": 30}';
parseJson(invalidJSON);
