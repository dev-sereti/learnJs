function carInfo(model,year,color){
    this.model=model;
    this.year=year;
    this.color=color;
    this.car=carInfo(){
        console.log('Hello, your car model is ${this.model} while the car year is ${this.year} and color ${this.color}')
    };
}