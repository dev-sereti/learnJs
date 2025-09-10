const cars=["BMW","Volvo","Mazda"];

/* Empty array */
let carList=[];
carList[0]="BMW";
carList[1]="Saab";

let listCars= new Array("BMW","Saab");

let size=carList.length;

document.getElementById("arrays").innerHTML = cars;
document.getElementById("arrays1").innerHTML = size;

function addCar(){
  listCars.push("Toyota")
  document.getElementById("arrays2").innerHTML=listCars;
};
