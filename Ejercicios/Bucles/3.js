/*
Ejercicio 3: Palabra al revés
Usa un bucle for para imprimir una palabra al revés.
Ejemplo: Si la palabra es "JavaScript", el resultado debe ser "tpircSavaJ".
*/
const word = "JavaScript";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log(reversed);