const datos = ['array', 1, true, undefined, 'story'];

function show(element) {
  console.log(element);
}

console.log('use an already defined function');
datos.forEach(show);

console.log('creating the function');
datos.forEach(function (element) {
  console.log(element);
});

console.log('arrow function');
datos.forEach((element) => console.log(element));
