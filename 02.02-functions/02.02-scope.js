'use strict';

let x = 1;
let y = 'test';
withVars();

function withVars() {
  let x = 'a';
  console.log(x, y);
}

console.log(x, y);
