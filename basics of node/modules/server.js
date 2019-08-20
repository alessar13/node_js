let User = require('./user');

let vasya = new User('Vasya');
let petya = new User('Petya');

vasya.hello(petya);

console.log(module);