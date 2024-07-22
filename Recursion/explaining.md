### Call Stack Execution

Let's visualize the call stack for `factorial(5)`:

1. `factorial(5)` is called.

   - `factorial(5)` is pushed onto the call stack.
   - `factorial(4)` is called within `factorial(5)`.

2. `factorial(4)` is pushed onto the call stack.

   - `factorial(3)` is called within `factorial(4)`.

3. `factorial(3)` is pushed onto the call stack.

   - `factorial(2)` is called within `factorial(3)`.

4. `factorial(2)` is pushed onto the call stack.

   - `factorial(1)` is called within `factorial(2)`.

5. `factorial(1)` is pushed onto the call stack.

   - `factorial(0)` is called within `factorial(1)`.

6. `factorial(0)` is pushed onto the call stack.

   - Base case reached, `factorial(0)` returns 1.
   - `factorial(0)` is popped off the call stack.
   - `factorial(1)` resumes.

7. `factorial(1)` returns `1 * 1 = 1`.

   - `factorial(1)` is popped off the call stack.
   - `factorial(2)` resumes.

8. `factorial(2)` returns `2 * 1 = 2`.

   - `factorial(2)` is popped off the call stack.
   - `factorial(3)` resumes.

9. `factorial(3)` returns `3 * 2 = 6`.

   - `factorial(3)` is popped off the call stack.
   - `factorial(4)` resumes.

10. `factorial(4)` returns `4 * 6 = 24`.

    - `factorial(4)` is popped off the call stack.
    - `factorial(5)` resumes.

11. `factorial(5)` returns `5 * 24 = 120`.
    - `factorial(5)` is popped off the call stack.
