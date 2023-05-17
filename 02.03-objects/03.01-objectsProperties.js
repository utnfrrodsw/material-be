const person = {
  firstName: 'Someone',
  lastName: 'Random',
  age: 30,
  hobbies: ['reading', 'surfing', 'coding'],
  address: {
    street: '123 Mountain view st',
    city: {
      zip: 816015,
      name: 'Kunlun',
    },
    state: {
      code: 63,
      name: 'Qinghai province',
    },
    country: 'China',
  },
};

console.log('dot notation');
console.log(`${person.firstName} lives in ${person.address.city.name}, and is ${person.age}`);

console.log('change age');
person.age = 31;
console.log(`${person.firstName} lives in ${person.address.city.name}, and is ${person.age}`);

console.log('bracket notation');
person['age'] = 40;
console.log(`${person['firstName']} lives in ${person['address']['city']['name']}, and is ${person['age']}`);

console.log('create properties');
person.job = 'developer';
console.log(
  `${person['firstName']} lives in ${person['address']['city']['name']}, is ${person['age']} and works as a ${person.job}`
);
