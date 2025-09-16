const person = {
  name: "Kelvin",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); 
