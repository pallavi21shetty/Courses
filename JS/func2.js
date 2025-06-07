//with return
// function add(num1, num2){
// let out = num1+num2
//  return out
// }
// let sum= add(1,2)
// console.log(sum);


// console.log(console.log('hello'));

//returning multiple value

// function squareCube(num){
//     let sqr=num**2
//     let cube = num **3
//     return sqr, cube
// }
// console.log(squareCube(3));


// function squareCube(num){
//     let sqr=num**2
//     let cube = num **3
//     return [sqr, cube]
// }
// console.log(squareCube(3));

// let x=10
// function increment(){
//     x++
// }
// increment()
// increment()
// console.log(x);

// let x=10
// function increment(){
//     x++
// }
// increment()
// increment()
// console.log(increment());
// console.log(x);




//scope 
// let x=10
// {
//     let y=20 
// }
// console.log(x);
// console.log(y); //y not identified

// let x=10
// {
//     let y=20 
//     console.log(y); 
// }
// console.log(x);

// let x=10
// {
//     var y=20 
// }
// console.log(x);
// console.log(y);

// let x=10
// {
//     var y=20 
//     console.log(x);
// console.log(y);
// }

// let x=10
// {
//     let x=30
//     let y=20 
//     console.log(x);
// console.log(y);
// }
// console.log(x);


// var x=10
// {
//     var x=30
//     let y=20 
//     console.log(x);
// console.log(y);
// }
// console.log(x);

// global.x=10
// {
//     var x=30
  
//     console.log(x);
// console.log(global.x);
// }
// console.log(x);


// global.x=10
// {
//     console.log(x);
// console.log(global.x);
// }
// console.log(x);


// global.x=10
// {
//     function something(){
//         let x=20
//          console.log(x);
// console.log(global.x);
//     }
//    something()
// }
// console.log(x);




//nested function
// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");
    
// }
// }
// outerFun();

// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");
    
// }
// }
// outerFun();
// innerFun();


// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");
    
// }
// innerFun();
// }
// outerFun();


// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");  
// }
// return innerFun
// }
// let out = outerFun();



// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");  
// }
// return innerFun
// }
// let out = outerFun();
// console.log(out);


// function outerFun(){
// console.log("im outer");
// function innerFun(){
//     console.log("i am inner");  
// }
// return innerFun
// }
// let out = outerFun();
// out()


// function outerFun(){
// console.log("im outer");
// function innerFun(name){
//     console.log(`i am inner ${name}`);  
// }
// return innerFun
// }
// let out = outerFun(); 
// out(`virat`)


// function outerFun(greet){
// console.log(greet);
// function innerFun(name){
//     console.log(`i am inner ${name}`);  
// }
// return innerFun
// }
// let out = outerFun('good morning'); 
// out(`virat`)



// function outerFun(greet){
// console.log(greet);
// function innerFun(name){
//     console.log(`i am inner ${name}`);  
// }
// return innerFun
// }
// outerFun('good morning'); 




// Assignment

//1. Write a function greet(name) that takes a name as an argument and returns a greeting string, e.g., "Hello, [name]!"
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Pallavi")); 

//2. Write a function add(a, b) that takes two numbers as arguments and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//3. Write a function calculateArea(length, width) that calculates and returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 4));

//4. Define a function expression multiply(a, b) that takes two numbers as arguments and returns their product.
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4));


//5.Create an anonymous function that takes an array of numbers and returns the sum of all the numbers
const sumArray = function(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sumArray([1, 2, 3, 4]));

//6. Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.
function multiplyNumbers(a, b = 1) {
    return a * b;
}
console.log(multiplyNumbers(5));    
console.log(multiplyNumbers(5, 2));

//7. Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//8. Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.
function reverseArray(arr) {
    return arr.slice().reverse(); // slice() to avoid mutating original array
}
console.log(reverseArray([1, 2, 3]));

//9. Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. What happens when you call a function before it’s declared?
sayHello(); 
function sayHello() {
    console.log("Hello!");
}

const sayHi = function() {
    console.log("Hi!");
};

