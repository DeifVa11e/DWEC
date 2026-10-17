/*
Ejercicio 3: Calculadora simple con switch
Crea un programa que solicite dos números y una operación matemática ( + , - , * , / ) y muestre el
resultado usando switch .
*/

const num1 = Number(prompt("Primer número:"));
const num2 = Number(prompt("Segundo número:"));
const operation = prompt("Operación (+, -, *, /):");

switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0");
    break;
  default:
    console.log("Operación no válida");
}