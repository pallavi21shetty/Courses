// 1. simple
// console.log('A'); //syncronous
// setTimeout(() => {
//   console.log('B'); //macrotask
// }, 0);
// console.log('C');


//2. use of microtask and macrotask
// console.log('A');
// setTimeout(() => {
//   console.log('B'); // Macrotask
// }, 0);
// Promise.resolve().then(() => {
//   console.log('C'); // Microtask
// });
// console.log('D');


//3.  nested microtask
// Promise.resolve().then(() => {
//   console.log('A');
//   Promise.resolve().then(() => console.log('B'));
// });
// console.log('C');


// 4. setTimeout vs setImmediate 
// setTimeout(() => console.log('A'), 100); // Macrotask
// setImmediate(() => console.log('B')); // Macrotask 



// 5. Event Listener and Promises
// document.body.addEventListener('click', () => {
//   console.log('Click Event'); // Macrotask
// });
// Promise.resolve().then(() => console.log('Promise Resolved')); // Microtask
// console.log('End');


//6. Interleaving Promises and setTimeout
// setTimeout(() => console.log('A'), 0);   // macro
// Promise.resolve().then(() => console.log('B')); //micro
// setTimeout(() => console.log('C'), 0);
// Promise.resolve().then(() => console.log('D'));


//7. Nested Promises with setTimeout
// console.log('A');
// setTimeout(() => {
//   console.log('B');
//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log('D');
//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });
// console.log('F');


//8.  Promise Chaining with setTimeout
// console.log('1');
// setTimeout(() => {
//   console.log('2');
//   Promise.resolve().then(() => {
//     console.log('3');
//   }).then(() => {
//     console.log('4');
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log('5');
// }).then(() => {
//   console.log('6');
// });
// console.log('7');  


//9. Mixing Promise Resolution with Delays
// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 2');
// });
// console.log('End');


// 10. Deeply Nested Promises in a Timer
// setTimeout(() => {
//   console.log('Timer 1');
//   Promise.resolve().then(() => {
//     console.log('Microtask 1');
//     Promise.resolve().then(() => {
//       console.log('Microtask 2');
//     });
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log('Microtask 3');
// });
// console.log('Main Task');


// 11. Combining Chained Promises and Timer Nesting

console.log('Start');
setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);
Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});
console.log('End'); 