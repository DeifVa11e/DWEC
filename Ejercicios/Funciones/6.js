/*
Ejercicio 6: Función de orden superior
Crea una función llamada applyOperation que reciba dos números y una función callback. La función debe
aplicar el callback a los dos números.
*/
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function applyOperation(a, b, callback) {
  return callback(a, b);
}

console.log(applyOperation(5, 3, add));
console.log(applyOperation(5, 3, subtract));