### Call Stack Execution

1. `firstFunction` is called.

   - `firstFunction` is pushed onto the call stack.
   - `console.log("First Function")` executes.

2. `secondFunction` is called within `firstFunction`.

   - `secondFunction` is pushed onto the call stack.
   - `console.log("Second Function")` executes.

3. `thirdFunction` is called within `secondFunction`.

   - `thirdFunction` is pushed onto the call stack.
   - `console.log("Third Function")` executes.

4. `thirdFunction` completes and is popped off the call stack.

5. Control returns to `secondFunction`.

   - `console.log("Second Function End")` executes.
   - `secondFunction` completes and is popped off the call stack.

6. Control returns to `firstFunction`.
   - `console.log("First Function End")` executes.
   - `firstFunction` completes and is popped off the call stack.
