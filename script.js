const fruits=[];
fruits.push("Bananas","Mangoes","Oranges","34");
console.log(fruits.length);

fruits[5]="Apples";
console.log(fruits[4]);
console.log(Object.keys(fruits));

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined