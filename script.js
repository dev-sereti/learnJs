const person = {
  name: "Kelvin",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // "Hi, I'm Kelvin"
