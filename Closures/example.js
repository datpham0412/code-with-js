function createBankAccount(initialBalance) {
  let balance = initialBalance; // balance is in lexical environment of createBankAccount
  return {
    deposit: function (amount) {
      // amount is in lexical environment of deposit
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
      } else {
        console.log(`Deposit amount must be positive`);
      }
    },
    getBalance: function () {
      console.log(`Current balance: $${balance}`);
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);
myAccount.getBalance(); // Current Balance: $100
myAccount.deposit(50); // Deposited: $50. New Balance: $150
myAccount.getBalance(); // Current Balance: $150
myAccount.deposit(-30); // Deposit amount must be positive
myAccount.getBalance(); // Current Balance: $150
