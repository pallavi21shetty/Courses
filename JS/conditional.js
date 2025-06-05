// //if
// //ex 1
// let isItRaining = false
// if(isItRaining){
//     console.log("yes, it is raining");
// }

// console.log('\n ecxecution completed\n');

// ex 2
// let x=20;
// if (x % 2 === 0) {
//     console.log("Even");
// }

// ex3
// let y=3
// if (y % 2 !== 0) {
//     console.log("Odd");
// };

// //ex 4
// let temp= 27
// if(temp<40){
//     console.log("lets play cricket\n");
// }

// //if else

// //example 1
// let temp1= 30
// if(temp1<=40){
//     console.log("lets play cricket\n");
// }
// else{
//     console.log("i don't want to play cricket\n");
// }


// //ex 2
// let temp2= 50
// if(temp2<=40){
//     console.log("lets play cricket\n");
// }
// else{
//     console.log("i don't want to play cricket\n");
// }


//ex 3
// let age=25
// let gender='male'
// if(age>18 && gender=='female'){
//     console.log("sare for you \n");
// }
// else{
//     console.log("T-shirt for you \n");
// }


//ex 4
// let hour = 15;
// let message;
// if (hour < 12) {
//   message = 'Good morning';
// } else {
//   message = 'Good afternoon';
// }
// console.log(message); 

// ex 5
// let age = 25;
// if (age >= 18) {
//     console.log("Adult")
// } else {
//     console.log("Not an Adult")
// }


// //if,  else if, else

// // ex 1
// let temp3= 30
// if(temp3<20){
//     console.log("lets play carrom\n");
// }
// else if(temp3<40){
//     console.log("lets play cricket\n");
// }
// else{
//    console.log("i don't want to play cricket\n"); 
// }


// //ex 2
// let temp4= 3
// if(temp4<20){
//     console.log("lets play carrom\n");
// }
// else if(temp4<40){
//     console.log("lets play cricket\n");
// }
// else{
//    console.log("i don't want to play cricket\n"); 
// }

// ex 3
// const x = 6;
// if (x > 0) {
//     console.log("Positive.");
// } else if (x < 0) {
//     console.log("Negative.");
// } else {
//     console.log("Zero.");
// };


// //nested

//ex 1
// let age=66
// if(age > 17)
// {
//     if(age <50)
//     {
//         console.log("you are citizen\n");
//     }
//     else{
//         console.log("you are  senior citizen\n");
//     }
// }
// else{
//     if(age <5)
//     {
//         console.log("Hello kid stay at home\n");
//     }
//     else{
//         console.log("Go to school\n");
//     }
// }

//ex 2
// let weather = "sunny";
// let temperature = 25;
// if (weather === "sunny") {
//     if (temperature > 30) {
//         console.log("It's a hot day!");
//     } else if (temperature > 20) {
//         console.log("It's a warm day.");
//     } else {
//         console.log("It's a bit cool today.");
//     }
// } else if (weather === "rainy") {
//     console.log("Don't forget your umbrella!");
// } else {
//     console.log("Check the weather forecast!");
// }


//switch
// ex 1
// let number= 3
// switch(number){
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//          break;
//     case 3:
//         console.log('three');
//          break;
//     case 4:
//         console.log('four');
//          break;
//     default:
//         console.log('Invalid');
// }

// ex 2
// const marks = 85;
// let Branch;
// switch (marks) {
//     case marks >= 90:
//         Branch = "Computer science engineering";
//         break;
//     case marks >= 80:
//         Branch = "Mechanical engineering";
//         break;
//     case marks >= 70:
//         Branch = "Chemical engineering";
//         break;
//     case marks >= 60:
//         Branch = "Electronics and communication";
//         break;
//     case marks >= 50:
//         Branch = "Civil engineering";
//         break;
//     default:
//         Branch = "Bio technology";
//         break;
// }
// console.log(`Student Branch name is : ${Branch}`);


//ternary

//ex 1
// let hour = 10;
// let message = (hour < 12) ? 'Good morning' : 'Good afternoon';
// console.log(message);

//ex 2
let age = 21;
const result =
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";
console.log(result);