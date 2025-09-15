let fuelLevel=0,astronauts=0,altitude=0;
while(fuelLevel<=5000 || fuelLevel=3000){
  fuelLevel=Number(prompt("Enter starting fuel level (must be >5000 and <30000):"));
  
}
console.log("Fuel level is valid" + fuelLevel);

while (astronauts < 1 || astronauts > 7 || !Number.isInteger(astronauts)) {
  astronauts = Number(prompt("Enter number of astronauts (1 to 7):"));
}