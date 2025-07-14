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



// function* asyncTask() {
//     console.log('Task 1');
//     yield new Promise(resolve =>
//         setTimeout(() =>
//             resolve('Task 2'), 1000));
//     console.log('Task 3');
// }
// const task = asyncTask();
// task.next().value.then(console.log);
// task.next(); 



// const person = {
//  name: 'John Doe',
//  age: 30,
//  gender: 'male',
//  isStudent: true,
//  address: {
//    city: 'New York',
//    country: 'USA'
//    },
//  sayHello: function() {
//    console.log('Hello!');
//    }
// };
// console.log(person.name); 
// console.log(person.age); 
// console.log(person.address.city); 
// person.sayHello(); 
// person.age = 31;
// person.isStudent = false;
// person.address.country = 'Canada';


// const rectangle = {
//  width: 10,
//  height: 5,
//  calculateArea: function() {
//  return this.width * this.height;
//  }
// };
// console.log(rectangle.calculateArea());


// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
//     }
//   };
// }
// const person1 = createPerson('Leohang', 23);
// const person2 = createPerson('Anup', 24);
// person1.greet(); // Hello, I am Leohang and I am 23 years old.
// person2.greet(); // Hello, I am Anup and I am 24 years old.


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
//   };
// }
// const person1 = new Person(‘Leohang Rai’, 23);
// const person2 = new Person(‘Anup Rai’, 24);
// person1.greet(); // Hello, I am Leohang Rai and I am 23 years old.
// person2.greet(); // Hello, I am Anup Rai and I am 24 years old.






// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon(); 



// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon('sushi', 'algorithms');


// let str="pallavi shetty";
// console.log(str.split(" "));

// let str1="pallavi shetty";
// console.log(str1.split());

// let str2="pallavi shetty";
// console.log(str2.split(""));




//shallow copy

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);






//deep copy

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);