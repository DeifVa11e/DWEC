/*
Ejercicio 4: Imprimir propiedades de un objeto
Usa un bucle for...in para imprimir las claves y valores de un objeto.
Ejemplo:
Salida esperada:
const person = {
nombre: "Ana",
edad: 30,
ciudad: "Madrid",
};
nombre: Ana
edad: 30
ciudad: Madrid
*/
const person = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}