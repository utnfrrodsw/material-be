'use strict';

const Person = {
  init(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function () {
      return `Hello, I'm ${this.firstName} ${this.lastName}`;
    };
  },
};

const Author = {
  __proto__: Person,
  init(firstName, lastName, age, quote) {
    Person.init.call(this, firstName, lastName, age);
    this.quote = quote;
    this.sayQuote = function () {
      return `"${this.quote}". ${this.firstName} ${this.lastName}`;
    };
  },
};

const sam = Object.create(Person);
sam.init('Sam', 'Clemens', 25);

const mark = Object.create(Author);
mark.init(
  'Mark',
  'Twain',
  25,
  'Never argue with stupid people, they will drag you down to their level and then beat you with experience.'
);

console.log(`${sam.firstName} says:\n${sam.greet()}`);
console.log();
console.log(`${mark.firstName} greets:\n${mark.greet()}\nand says:${mark.sayQuote()}`);
console.log();

console.log(`sam.__proto__ is Person? ${sam.__proto__ === Person}`);
console.log(`Person.__proto__ is Object.prototype? ${Person.__proto__ === Object.prototype}`);
console.log(`Person.prototype: ${Person.prototype}`);

console.log(`mark.__proto__ is Author? ${mark.__proto__ === Author}`);
console.log(`mark.__proto__.__proto__ is Person? ${mark.__proto__.__proto__ === Person}`);
console.log(`Author.__proto__ is Person: ${Author.__proto__ === Person}`);
