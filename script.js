// concat()
const fruits=["Oranges","Bananas","Apples"];

const vegetables=["Kales","Spinach","Cabbage"];
const grocery=fruits.concat(vegetables);
console.log(grocery.toString());  



//copyWithin()

// Copy to index 0 the element at index 3
console.log(fruits.copyWithin(0, 3, 4));
console.log(vegetables.copyWithin(1, 3));

