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
