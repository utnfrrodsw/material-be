'use strict';

function twainise(nonPrimitiveObject, primitiveFullName, primitiveAge, primitiveIsAlias) {
  nonPrimitiveObject.firstName = 'Mark';
  nonPrimitiveObject.lastName = 'Twain';
  nonPrimitiveObject.age = 47;
  nonPrimitiveObject.isAlias = true;
  nonPrimitiveObject.altered = true;

  primitiveFullName = 'Mark Twain';
  primitiveAge = 47;
  primitiveIsAlias = true;
}

let mark = {
  firstName: 'Sam',
  lastName: 'Clemens',
  age: 74,
  isAlias: false,
};

let fullName = 'Sam Clemens';
let age = 74;
let isAlias = false;

twainise(mark, fullName, age, isAlias);

console.log(`mark: ${JSON.stringify(mark)}`);
console.log(`fullName: ${fullName}`);
console.log(`age: ${age}`);
console.log(`isAlias: ${isAlias}`);
