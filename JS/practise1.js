//1. lexical scope
// function myFunction() {
//   var foo = 'bar';
// }
// myFunction();
// console.log(foo); // Uncaught ReferenceError: foo is not defined



//closures
// 2. global variable
// let globalVariable = 'I am a global variable';
// function displayGlobalVariable() {
//     console.log(globalVariable);
// }
// displayGlobalVariable();


//3. local scope
// function localScopeExample() {
//     let localVariable = 'I am a local variable';
//     console.log(localVariable);
// }
// localScopeExample(); // Outputs: I am a local variable
// console.log(localVariable); // Error: localVariable is not definedHere, localVariable is in the local scope of localScopeExample and cannot be accessed outside of this function.


//4. closure simple
// function outerFunction() {
//     let outerVariable = 'I am from outer scope';
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// const closureFunction = outerFunction();
// closureFunction();


//5. Closures with Parameters
// function createGreeter(greeting) {
//     return function(name) {
//         console.log(`${greeting}, ${name}!`);
//     };
// }
// const sayHello = createGreeter('Hello');
// sayHello('Alice'); 
// sayHello('Bob'); 
// const sayHi = createGreeter('Hi');
// sayHi('Charlie'); 
// sayHi('Dana'); 


//6. Closures and the Lexical Environment
// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// }
// const increment = counter();
// increment();
// increment(); 
// increment(); 


// 7. Closures and the Garbage Collector
// function createCounter() {
//     let count = 0;
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         }
//     };
// }
// const counterInstance = createCounter();
// console.log(counterInstance.increment()); 
// console.log(counterInstance.increment()); 
// console.log(counterInstance.decrement()); 






//8. Immediately Invoked Function Expressions (IIFE) Examples
// (function() {
//     var localVar = 'This is a local variable';
//     console.log(localVar); // Output: This is a local variable
// })();


// 9. 
// var result = (function() {
//     var x = 10;
//     var y = 20;
//     return x + y;
// })();
// console.log(result);


// 10. An important use of IIFEs is closures.
const init = (function(){
    let i = 0;
    function display() {
        console.log('i =>', ++i);
    }
    return display;
})();


//11. Use Async/Await in IIFE
// (async function () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     if (json.userId == 1) {
//       json.completed == false;
//     } else {
//       json.completed == true;
//     }
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// })();







// 12. higher order function
// function fun() {
//     console.log("Hello, World!");
// }
// function fun2(action) {
//     action();
//     action();
// }
// fun2(fun);


//13. forEach
// const n = [1, 2, 3];
// n.forEach((num) => console.log(num * 2));


//14. map
// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);


// 15. filter
// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);


// 16. reduce
// const n = [1, 2, 3, 4, 5];
// const sum = n.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// 17. find
// const n = [1, 2, 3, 4, 5];
// const fEven = n.find((num) => num % 2 === 0);
// console.log(fEven);


//18. some
// const n = [1, 2, 3, 4, 5];
// const hasNeg = n.some((num) => num < 0);
// console.log(hasNeg);


//19. every
// const n = [1, 2, 3, 4, 5];
// const allPos = n.every((num) => num > 0);
// console.log(allPos)





// 20. prototype
// function Human(firstName, lastName) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }
// var person1 = new Human("Virat", "Kohli");
// console.log(person1)


// 21
// function Human(firstName, lastName) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }
// var person1 = new Human("Virat", "Kohli");
// console.log(person1)
// console.log(Human.prototype)


// 22
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hello, my name is ${this.name}.`);
// };
// const n = new Person("Sheema");
// n.sayHello();





// 23 prototype chain
// let o = {
//     name: "Pranjal",
//     age: 21
// }
// let a = [1, 2, 3, 4, 5]
// let s = "Hello GFG"
// function p() {
//     console.log('My name is xyzabc')
// }
// Object.prototype.common = function () {
//     console.log('I am a shared method from prototype')
// }
// o.common()
// a.common()
// s.common()
// p.common()







// 24. Arrow Function
// const addArrow = (x, y) => x + y;


//25
// function Person() {
//    this.age = 0;
//     setInterval(() => {
//      // 'this' refers to the Person instance, not the setInterval function
//      this.age++;
//      console.log(this.age);
//    }, 1000); }
//   const person = new Person();


  //26
//   const numbers = [1, 2, 3, 4];
//  const squared = numbers.map(num => num * num);
//  console.log(squared); 


//27
// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// console.log(materials.map((material) => material.length));





