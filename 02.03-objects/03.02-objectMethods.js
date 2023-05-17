const person = {
  firstName: 'Someone',
  lastName: 'Random',
  birthDate: new Date('1993-01-10'),
  getAge() {
    return Math.floor((new Date() - this.birthDate.getTime()) / 3.15576e10);
  },
  getAgeToDate(someDate) {
    return Math.floor((someDate - this.birthDate.getTime()) / 3.15576e10);
  },
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
    getFullAddress() {
      return `${this.street}, ${this.city.name}, ${this.state.name},${this.country}`;
    },
  },
};

console.log(person.address.getFullAddress());
console.log(person.getAge());
console.log(person.getAgeToDate(new Date('2020-01-01')));
