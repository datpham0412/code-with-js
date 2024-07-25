// Create a promise using the 'Promise' constructor, which takes a function (executor) with two arguments:
// resolve and reject. The executor function is called immediately when the promise is created.


const promise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve('Promise was successful!');
        }else{
            reject('Promise was not successful!');
        }
    }, 1000);
});

console.log(promise);