class Person {
  constructor(name) {
    this.name = name; // public property
  }

  greet() {          // public method
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Kelvin");
console.log(p.name);  // ✅ Accessible
p.greet();            // ✅ Accessible


class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance() {
    return this.#balance; // access private property inside class
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // ✅ 100
console.log(account.#balance);     // ❌ ERROR: Private field
