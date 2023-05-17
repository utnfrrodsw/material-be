'use strict';

const sayHi = (name, greeting = 'Hi') => `${greeting} ${name}`;

const greetExpressionAnonymous = (recipient, greeting = 'Hi') => {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return greetExpressionAnonymous(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
};

console.log(sayHi('John', 'Hello'));
console.log(greetExpressionAnonymous({ firstName: 'Jane', lastName: 'Doe' }, 'Hello'));
