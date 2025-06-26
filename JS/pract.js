// let num=130
// let p= new Promise((res,rej) => {
//     if(num>100){
// res("greater than 100")
//     }else{
//         rej("less than 100")
//     }
// })
// p.then((res)=> console.log(res))
// .catch((err)=> console.log(err))




// call back
// 1.
//  function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);


//2.
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Alice" };
//     callback(data);
//   }, 2000); // Simulating a delay of 2 seconds
// }
// fetchData((data) => {
//   console.log("Data received:", data);
// });


// 3.
// function readFile(filePath, callback) {
//   const fs = require('fs');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data);
//     }
//   });
// }

// readFile('example.txt', (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     console.log("File content:", data);
//   }
// });


// let read_file =(file)=> {
//     fs.readFile(file, 'utf8', (err,data)=>{
//     if(err){
//         console.error('error reading file:',err);
//         return;
//     }
//     console.log('file content:');
//     console.log(data);
//     });
// }
//let file_name1 = "one.txt"
// read_file(file_name1)


//4
// fetchRandomJoke((joke) => {
//     console.log(joke);

//     translateJoke(joke, (translatedJoke) => {
//         console.log(translatedJoke);

//         postJoke(translatedJoke, () => {
//             console.log("Joke posted successfully!");
//         });
//     });
// });






// 5
// callback hell simple ex
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 done");
//     callback();
//   }, 1000);
// }
// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 done");
//     callback();
//   }, 1000);
// }
// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 done");
//     callback();
//   }, 1000);
// }
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });



//6
// overcome callhell by promise
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 done");
//       resolve();
//     }, 1000);
//   });
// }
// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 done");
//       resolve();
//     }, 1000);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 done");
//       resolve();
//     }, 1000);
//   });
// }
// step1()
//   .then(() => step2())
//   .then(() => step3())
//   .then(() => {
//     console.log("All steps completed");
//   });





//7
// overcome callhell by async await
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 done");
//       resolve();
//     }, 1000);
//   });
// }
// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 done");
//       resolve();
//     }, 1000);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 done");
//       resolve();
//     }, 1000);
//   });
// }
// async function runSteps() {
//   await step1();  // Waits for step1 to finish
//   await step2();  // Then runs step2
//   await step3();  // Then runs step3
//   console.log("All steps completed");
// }
// runSteps();



// 8 closure
// function createCounter() {
//     let count = 0;
//     return function() {
//         return ++count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());



// 9. remove dublicate
//   function dublicate(a){
//   let result=[]
//   for(let i=0;i<a.length;i++){
//     if(!result.includes(a[i])){
//       result.push(a[i]);
//     }
//   }
//   console.log(result);
//   }
//   dublicate([2,5,2,7,4,7,4,6])



//10. 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// const list = [1, 2, 3, 1, 2, 4, 5];
// const uniqueList = removeDuplicates(list);
// console.log(uniqueList); // Output: [1, 2, 3, 4, 5]



//11. fetching data from api
//   fetch('https://official-joke-api.appspot.com/random_joke')
//   .then(response => response.json())       // Convert response to JSON
//   .then(data => {
//     console.log("Joke:", data.setup);
//     console.log("Punchline:", data.punchline);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });


