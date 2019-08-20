function User(name) {
    this.name = name;
}

User.prototype.hello = (who) => {
    console.log(`Hello ${who.name}`);
}

console.log('User is working');

module.exports = User;
// global.User = User; global variable
console.log(module);