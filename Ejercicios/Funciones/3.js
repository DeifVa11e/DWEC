/*
Ejercicio 3: Función con valores por defecto
Crea una función llamada greetUser que reciba un parámetro name y tenga un valor por defecto de
"Invitado" si no se proporciona ningún nombre.
*/
function greetUser(name = "Invitado") {
  console.log(`Hola, ${name}!`);
}
greetUser();
greetUser("Diego");