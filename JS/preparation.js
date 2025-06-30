// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// const addTwo = add(5);  // First function call with 5
// console.log(addTwo(4));



//generator
// function* generate() {
//     yield 'Hello';
//     yield 'World';
//     return 'Done';
// }
// const generator = generate();
// generator.next();


// function* example() {
//     console.log("Step 1");
//     yield 1;
//     console.log("Step 2");
//     yield 2;
//     console.log("Step 3");
//     return 3;
// }
// const gen = example();
// gen.next();
// gen.next();
// gen.next();
// gen.next();


// function* fibonacci(limit) {
//     let [prev, current] = [0, 1];
//     while (limit--) {
//         yield current;
//         [prev, current] = [current, prev + current];
//     }
// }
// const fib = fibonacci(5);
// console.log([...fib]);



function* asyncTask() {
    console.log('Task 1');
    yield new Promise(resolve =>
        setTimeout(() =>
            resolve('Task 2'), 1000));
    console.log('Task 3');
}
const task = asyncTask();
task.next().value.then(console.log);
task.next(); 