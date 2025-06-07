// function printSomething(){
//     console.log('something!!'); 
// }
// function higherOrder(callback){
// }
// printSomething()


// function printSomething(){
//     console.log('something!!'); 
// }
// function higherOrder(callback){
//     console.log('first');
//     callback()
    
// }
// higherOrder(printSomething)


// function printSomething(){
//     console.log('something!!'); 
// }
// function higherOrder(callback){
//     console.log('first');
//     callback()
    
// }
// function higherOrder2(){
//     return printSomething
// }
// console.log(higherOrder2());


//closures
// function createCounter(){
//     let count=0; //not globally declared
//     return function(){
//         return ++count;
//     };
// }
// const counter =createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function createCounter(){
//     let count=0;
//         return ++count;
// }
// let counter =createCounter()
// console.log(counter);
// counter =createCounter()
// console.log(counter);
// counter =createCounter()
// console.log(counter);



// function createCounter(){
//     let count=0;
//     function inner() {
//       return  ++count;   //it remembers outer function value
        
//     }
//         return inner
// }
// let counter =createCounter()
// counter() //increments but not prints
// console.log(counter());
// console.log(counter());
// console.log(counter());




//arrow function
// function add1(num1, num2){
//     return num1 + num2
// }
// let add2=(num1, num2) => num1+ num2
// console.log(add1(10,20));
// console.log(add2(20,20));


// let <function name> =( ) => {
// .
// .
// }


// let sqr =(num) => {
//     return num ** 2
// }
// console.log(sqr(30));


// let addAll =( ) =>{
// console.log(arguments);

// }
// addAll[10,20,30,40]


// let addAll =(...params ) =>{
//     let sum=0
// for (let data of params){
// sum += data  
// }
// return sum
// }
// let out= addAll(10,20,30,40)
// console.log(out);


let printSomething=( ) => console.log('something');
printSomething()