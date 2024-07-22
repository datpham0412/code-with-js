### Execution Steps

1. `createBankAccount(100)` is called:

   - A new lexical environment is created with `balance = 100`.
   - An object with `deposit` and `getBalance` methods is returned.

2. `myAccount.getBalance()` is called:

   - Accesses `balance` from the lexical environment and logs `Current Balance: $100`.

3. `myAccount.deposit(50)` is called:

   - Accesses `balance` from the lexical environment, adds `50` to `balance`, logs `Deposited: $50. New Balance: $150`.

4. `myAccount.getBalance()` is called again:

   - Accesses `balance` from the lexical environment and logs `Current Balance: $150`.

5. `myAccount.deposit(-30)` is called:

   - Logs `Deposit amount must be positive` because the amount is not positive.

6. `myAccount.getBalance()` is called again:
   - Accesses `balance` from the lexical environment and logs `Current Balance: $150`.
