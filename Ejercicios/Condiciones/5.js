/*
Ejercicio 5: Uso del operador ternario
Mostrar solución
Usando el operador ternario, solicita al usuario su edad y muestra "Eres mayor de edad" si tiene 18 años o
más, y "Eres menor de edad" en caso contrario
*/
const userAge = Number(prompt("¿Cuántos años tienes?"));
console.log(userAge >= 18 ? "Eres mayor de edad" : "Eres menor de edad");