/*
Ejercicio 2: Suma de números pares
Usando un bucle while , suma todos los números pares entre 1 y 20 e imprime el resultado.
*/
let n = 1;
let sum = 0;
while (n <= 20) {
  if (n % 2 === 0) sum += n;
  n++;
}
console.log(sum);