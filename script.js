const person = {
  name: "Kelvin",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); 
// "Hi, I'm undefined" 
// because `this` in arrow functions does not bind to `person`
// it takes `this` from the outer scope (likely `window`).
