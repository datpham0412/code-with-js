const fetch = require("node-fetch");

function* fetchJson(url) {
  const response = yield fetch(url);
  const data = yield response.json();
  return data;
}

// Helper function to run the generator
function run(generator) {
  const gen = generator();

  function step(value) {
    const result = gen.next(value);
    if (result.done) return result.value;
    return Promise.resolve(result.value).then(step);
  }

  return step();
}

// Using the generator to fetch JSON data
run(function* () {
  const data = yield fetchJson("https://api.github.com/users/octocat");
  console.log(data);
});
