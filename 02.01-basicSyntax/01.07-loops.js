let i = 0;
let j = 0;

console.log('while');
while (i < 3) {
  console.log(`i is ${i}, so i<3 is ${i < 3}`);
  i++;
}

console.log('do...while');
do {
  console.log(`j is ${j}, so j<0 is ${j < 0} but it executed once`);
} while (j < 0);

console.log('for');

for (let k = 0; k < 3; k++) {
  console.log(`k is ${k}, so k<3 is ${k < 3}`);
}
