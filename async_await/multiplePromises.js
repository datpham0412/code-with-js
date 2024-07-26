const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

async function handleMultiplePromises() {
  try {
    const value = await Promise.all([promise1, promise2, promise3]);
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}

handleMultiplePromises();
