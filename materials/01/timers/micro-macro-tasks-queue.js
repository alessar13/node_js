// какой порядок вывода в console ?

// microqueue = [];
// tasksqueue = [];

const intervalId = setInterval(() => {
  console.log('setInterval'); 
}, 10);

setTimeout(() => {
  console.log('setTimeout 1'); 

  const promise = new Promise((resolve, reject) => {
    resolve('then 4');
  });

  promise
    .then((value) => {
      console.log(value); 

      setTimeout(() => {
        console.log('setTimeout 2'); 
        clearInterval(intervalId);
      }, 10);
    });
}, 10);

const promise = new Promise((resolve, reject) => {
  resolve('then 1');
});

promise
  .then((value) => {
    console.log(value);
    return 'then 2';
  })
  .then((value) => {
    console.log(value); 

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 10, 'then 3');
    });
  })
  .then((value) => {
    console.log(value);
  });

/*
then 1
then 2
setInterval
setTimeout 1
then 4
then 3
setInterval
setTimeout 2
*/
