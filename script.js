// Pub

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

// Private

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
console.log(account.getBalance()); // 100
//console.log(account.#balance);     // ERROR: Private field


//Protected


class Vehicle {
  constructor(type) {
    this._type = type; // "protected" by convention
  }

  _describe() {
    console.log(`This is a ${this._type}`);
  }
}

class Car extends Vehicle {
  showType() {
    // accessing "protected" property/method in child
    this._describe();
  }
}

const c = new Car("Sedan");
c.showType();    // Works: "This is a Sedan"
console.log(c._type); // Possible, but not recommended



// Typeof


let length=20;
let heights=[24,76,66,78];
console.log(typeof(length));
console.log(typeof(heights));
