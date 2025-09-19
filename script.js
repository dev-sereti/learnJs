// concat()
const fruits=["Oranges","Bananas","Apples"];

const vegetables=["Kales","Spinach","Cabbage"];
const grocery=fruits.concat(vegetables);
console.log(grocery.toString());  



//copyWithin()

const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
