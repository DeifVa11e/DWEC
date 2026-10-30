class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  describe() {
    return `${this.name} es un ${this.species}`;
  }
}

const dog = new Animal("Firulais", "perro");
console.log(dog.describe());