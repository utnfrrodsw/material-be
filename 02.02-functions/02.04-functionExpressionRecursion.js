'use strict';

//Declaration
function sayHiDeclaration(recipient, greeting = 'Hi') {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return sayHiDeclaration(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
}

//Expression
const greetExpression = function sayHiExpression(recipient, greeting = 'Hi') {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return greetExpression(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
};

//Expression
const greetExpression2 = function sayHiExpression2(recipient, greeting = 'Hi') {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return sayHiExpression2(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
};

//Anonymous function expression
const greetExpressionAnonymous = function (recipient, greeting = 'Hi') {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return greetExpressionAnonymous(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
};

const greetArrowFunction = (recipient, greeting = 'Hi') => {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`;
  } else if (typeof recipient === 'object') {
    return greetArrowFunction(`${recipient.firstName} ${recipient.lastName}`, greeting);
  }
};

console.log(sayHiDeclaration({ firstName: 'John', lastName: 'Doe' })); //Declaration
console.log(greetExpression({ firstName: 'Josh', lastName: 'Doe' })); //Expression
console.log(greetExpression2({ firstName: 'Jay', lastName: 'Doe' })); //Expression
console.log(greetExpressionAnonymous({ firstName: 'Jane', lastName: 'Doe' })); //Anonymous function expression
console.log(greetArrowFunction({ firstName: 'Jess', lastName: 'Doe' })); //Arrow function

//console.log(sayHiExpression2({ firstName: 'Fail', lastName: 'ToRun' })); //uncomment to see the error
