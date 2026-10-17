/*
Ejercicio 5: Función que use parámetros rest
Crea una función llamada multiplyAll que acepte un número indefinido de argumentos y retorne su
multiplicación.
*/
function multiplyAll(...numbers) {
  return numbers.reduce((acc, n) => acc * n, 1);
}
console.log(multiplyAll(2, 3, 4));