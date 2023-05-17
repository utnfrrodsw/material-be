const sam = {
  firstName: 'Sam',
  lastName: 'Clemens',
  age: 25,
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  },
};

const mark = Object.create(sam, {
  firstName: { value: 'Mark' },
  lastName: { value: 'Twain' },
});

console.log(`${sam.firstName} says:\n${sam.greet()}`);
console.log(`${mark.firstName} says:\n${mark.greet()}`);
console.log();

console.log(`mark's prototype is:${JSON.stringify(mark.__proto__)}`);

console.log(sam == mark.__proto__);

console.log(`the prototype of the prototype of mark is:${JSON.stringify(mark.__proto__.__proto__)}`);

console.log(
  `the prototype of the prototype of the prototype of literal is:${JSON.stringify(mark.__proto__.__proto__.__proto__)}`
);

const nonLiteralSam = Object.create(
  {},
  {
    firstName: { value: 'Non-literal Sam' },
    lastName: { value: 'Clemens' },
    age: { value: 25 },
    greet: {
      value: function () {
        return `Hello, I'm ${this.firstName} ${this.lastName}`;
      },
    },
  }
);

console.log(`${nonLiteralSam.firstName} says:\n${nonLiteralSam.greet()}`);
