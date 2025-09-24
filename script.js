    function Car(make, model) {
      this.make = make;
      this.model = model;
    }

    Car.prototype.startEngine = function() {
      console.log(`${this.make} ${this.model} engine started.`);
    };

    const myCar = new Car('Toyota', 'Camry');
    myCar.startEngine(); // Output: Toyota Camry engine started.