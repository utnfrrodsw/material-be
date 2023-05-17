'use strict';

const sam = {
  firstName: 'Sam',
  lastName: 'Clemens',
  age: 25,
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  },
};

const mark = {
  firstName: 'Mark',
  lastName: 'Twain',
  quote: 'Never argue with stupid people, they will drag you down to their level and then beat you with experience.',
  sayQuote() {
    return `"${this.quote}". ${this.firstName} ${this.lastName}`;
  },
  __proto__: sam,
};

console.log(`${sam.firstName} says:\n${sam.greet()}`);
console.log();

console.log(`${mark.firstName} greets:\n${mark.greet()}\nand says:${mark.sayQuote()}`);
console.log();

console.log(`sam's prototype is:${JSON.stringify(sam.__proto__)}`);
console.log(`mark's prototype is:${JSON.stringify(mark.__proto__)}`);

console.log(`mark.__proto__ is sam? ${sam === mark.__proto__}`);
console.log(`the prototype of the prototype of mark is:${JSON.stringify(mark.__proto__.__proto__)}`);
console.log(
  `the prototype of the prototype of the prototype of mark is:${JSON.stringify(mark.__proto__.__proto__.__proto__)}`
);
