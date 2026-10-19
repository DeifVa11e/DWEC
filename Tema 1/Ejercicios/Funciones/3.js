function greetUser(name = "Invitado") {
    return `Hola, ${name}`;
}

console.log(greetUser("Diego"));
console.log(greetUser());