function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const user = new Person("Diego", "Jiménez", 19);
console.log(user);