'use strict';

const sam = {
  firstName: 'Sam',
  lastName: 'Clemens',
  age: 25,
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  },
};

console.log(`${sam.firstName} says:\n${sam.greet()}`);

console.log(`sam's prototype is:${JSON.stringify(sam.__proto__)}`);

console.log(Object.prototype == sam.__proto__);

console.log(`the prototype of the prototype of sam is:${JSON.stringify(sam.__proto__.__proto__)}`);
