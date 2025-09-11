let isRaining = true;
let temperature = 75;

if (isRaining && temperature < 20) {
  console.log("It's cold and rainy.");
} else if (isRaining) {
  console.log("It's just raining.");
} else {
  console.log("It's not raining.");
}

let hasPermission = false;
console.log(!hasPermission);