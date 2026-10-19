// Pedir al usuario su edad y ponerlo en el grupo correspondiente
const edad = Number(prompt("¿Cuantos años tienes?"));

switch (true) {
    case edad < 13:
        console.log("Niño");
        break;
    case edad <= 19:
        console.log("Adolescente");
        break;
    case edad <= 64:
        console.log("Adulto");
        break;
    default:
        console.log("Adulto/a mayor");
}