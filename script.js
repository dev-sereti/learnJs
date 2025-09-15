let fuelLevel=0,astronauts=0,altitude=0;
while(fuelLevel<=5000 || fuelLevel>=30000){
  fuelLevel=Number(prompt("Enter starting fuel level (must be >5000 and <30000):"));
  console.log("Fuel level is valid" + fuelLevel);
}