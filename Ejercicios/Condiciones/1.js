/*
Ejercicio 1: Verificar número positivo o negativo
Crea un programa que solicite al usuario un número mediante prompt y muestre en la consola si es
positivo, negativo o cero.
*/
const num = Number(prompt("Introduce un número:")); // string -> number
if (num > 0) {
  console.log("Positivo");
} else if (num < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}