/*
Ejercicio 6: Tabla de multiplicar
Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10 usando un bucle for.
Ejemplo: Si el usuario introduce 5 , la salida será:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/
const number = Number(prompt("Introduce un número:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}