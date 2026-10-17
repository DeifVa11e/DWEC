/*
Ejercicio 4: Verificar año bisiesto
Crea un programa que solicite un año y determine si es bisiesto.
Reglas para un año bisiesto:
Es divisible por 4.
No es divisible por 100, salvo que también sea divisible por 400.
*/
const year = Number(prompt("Introduce un año:"));
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeap ? `${year} es bisiesto` : `${year} no es bisiesto`);