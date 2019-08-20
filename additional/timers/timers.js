const fs = require('fs');

console.log('start');

fs.readFile(__filename, (error, content)=>{
    console.log('readfile');
})

setImmediate( () => {
    console.log('immediate');
})

new Promise( resolve => {
    console.log('promise create');
    resolve('promise then');
}).then( value => {
    console.log(value);;
});

process.nextTick( () => {
    console.log('nextTick1');
});

console.log('end');