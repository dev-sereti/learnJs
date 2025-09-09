class CarInfo {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    car() {
        console.log(`Hello, your car model is ${this.model} while the car year is ${this.year} and color ${this.color}`);
    }
}

const car1 = new CarInfo('BMW', 2017, 'Silver');
car1.car();
