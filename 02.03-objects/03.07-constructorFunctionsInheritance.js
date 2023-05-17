'use strict';

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.firstName} ${this.lastName}`;
};

function Author(firstName, lastName, age, quote) {
  Person.call(this, firstName, lastName, age);
  this.quote = quote;
}

Author.prototype = Object.create(Person.prototype);
Author.prototype.constructor = Author;

Author.prototype.sayQuote = function () {
  return `"${this.quote}". ${this.firstName} ${this.lastName}`;
};

const sam = new Person('Sam', 'Clemens', 25);
const mark = new Author(
  'Mark',
  'Twain',
  25,
  'Never argue with stupid people, they will drag you down to their level and then beat you with experience.'
);

console.log(`${sam.firstName} says:\n${sam.greet()}`);
console.log();
console.log(`${mark.firstName} greets:\n${mark.greet()}\nand says:${mark.sayQuote()}`);

console.log();
console.log("object's prototype");
console.log(`mark.__proto__ is Author.prototype? ${mark.__proto__ === Author.prototype}`);
console.log(`mark.__proto__.__proto__ is Person.prototype? ${mark.__proto__.__proto__ === Person.prototype}`);
console.log(`mark.__proto__.__proto__ is sam.__proto__? ${mark.__proto__.__proto__ === sam.__proto__}`);

console.log();
console.log(`Author._proto_ is Person? ${Author.__proto__ === Person}`);
console.log(`Author._proto_.__proto__ is Person? ${Author.__proto__.__proto__ === Person}`);
console.log(`Author._proto_ is Function.prototype? ${Author.__proto__ === Function.prototype}`);

console.log(`Author._proto_ is Person.__proto__? ${Author.__proto__ === Person.__proto__}`);

console.log(`Author.prototype.__proto__ is Person.prototype? ${Author.prototype.__proto__ === Person.prototype}`);
