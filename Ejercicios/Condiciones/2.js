/*
Ejercicio 2: Clasificación de edades
Solicita al usuario su edad y muestra un mensaje indicando su grupo de edad:
Menor de 13: "Niño/a"
Entre 13 y 19: "Adolescente"
Entre 20 y 64: "Adulto/a"
65 o más: "Adulto/a mayor"
*/
const age = Number(prompt("¿Cuántos años tienes?"));
if (age < 13) {
  console.log("Niño/a");
} else if (age <= 19) {
  console.log("Adolescente");
} else if (age <= 64) {
  console.log("Adulto/a");
} else {
  console.log("Adulto/a mayor");
}