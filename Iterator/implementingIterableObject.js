const iterableObject = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return{
            next() {
                if (current <= end) {
                    return { value: current++, done: false};
                }
                return { value: undefined, done: true };
            }
        };
    }
};

// Using the iterable object with for ... of loop
for (const value of iterableObject) {
    console.log(value); // Output: 1 2 3 4 5
}