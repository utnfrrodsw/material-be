let a = '1';

switch (a) {
  case 1:
    console.log(`a is 1`);
    break;
  case 2:
    console.log(`a is 2`);
    break;
  case '1':
    console.log(`a is '1'`);
    break;
  default:
    console.log('no match');
    break;
}
