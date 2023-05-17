'use strict';

const greet = function sayHi(name, greeting = 'Hi') {
  return `${greeting} ${name}`;
};

const anonymousGreet = function (name, greeting = 'Hi') {
  return `${greeting} ${name}`;
};

console.log(greet('Jane', 'Hello'));
console.log(anonymousGreet('Josh', 'Hello'));
console.log(sayHi('Jane', 'Hello')); //uncomment to see the error
