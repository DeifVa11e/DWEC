var fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2

var first = fruits[0];
console.log(first);
// Apple

var last = fruits[fruits.length - 1];
console.log(last);
// Banana

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

var newLength = fruits.push("Orange");
console.log(newLength);
// ["Apple", "Banana", "Orange"]

var last = fruits.pop(); // eliminar Orange (del final)
console.log(fruits.length);
// ["Apple", "Banana"];

var first = fruits.shift(); // eliminar Apple del principio
console.log(fruits.length);
// ["Banana"];

var newLength = fruits.unshift("Strawberry"); // añadir al principio
console.log(fruits.length);
// ["Strawberry", "Banana"];

fruits.push("Mango");
console.log(fruits.length);
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf("Banana");
console.log(pos);
// 1

var removedItem = fruits.splice(pos, 1); // así es como se elimina un elemento
console.log(fruits.length);
// ["Strawberry", "Mango"]

var shallowCopy = fruits.slice(); // así es como se hace una copia superficial
// ["Strawberry", "Mango"]