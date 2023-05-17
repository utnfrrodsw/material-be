'use strict';

function sayHi(name, greeting = 'Hi') {
  return `${greeting} ${name}`;
}

console.log(sayHi('John', 'Hello'));
console.log(sayHi('John')); //parameters are optionals but can have a default value
console.log(sayHi()); //parameters can't be mandatory
console.log(sayHi('Hello', 'John')); //order matters
console.log(sayHi('John', 'Hello', '!')); //additional parametters are ignored
