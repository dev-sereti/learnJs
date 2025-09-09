function carInfo(model,year,color){
    this.model=model;
    this.year=year;
    this.color=color;
    this.car=function(){
        console.log('Hello, your car model is ${this.model} while the car year is ${this.year} and color ${this.color}');
    };
}
const car1=new carInfo('BMW',2017,'Silver');
car1.car();