'use strict';

function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    greet() {
      return `Hello, I'm ${this.firstName} ${this.lastName}`;
    },
  };
}

const sam = createPerson('Sam', 'Clemens', 25);
console.log(`${sam.firstName} says:\n${sam.greet()}`);
