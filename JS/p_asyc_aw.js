// // 1. simple resolve
// const promise = new Promise((resolve, reject) => {
//   resolve(777);
// });
// promise.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");


// // 2. simple reject
// const promiseA = new Promise((resolve, reject) => {
//   reject(777);
// });
// promiseA.catch((val) => console.log(val));
// console.log("immediate logging");


// // 3. how it works if resolve and reject both there
// let promise = new Promise((resolve, reject) => {
//     resolve("successfully executed")
//     reject("fail to execute")
// }
// );
// promise.then((res)=> console.log(res))
// .catch((res)=> console.log(res))


// // 4.
// let promise = new Promise((resolve, reject) => {
//         let x=false //asyncronous function
//         if(x){
//   resolve("successfully executed")
//     }
//   else{
//     reject("fail to execute")
//   }
// }
// );
// promise.then((res)=> console.log("resolved:",res))
// .catch((res)=> console.log( "Rejected",res))


// 5
// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=true 
//         if(asyncronous_function){
//   resolve("successfully executed")
//     }
//   else{
//     reject("fail to execute")
//   }
// },2000)
// }
// );
// promise.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("Done!!"))
// .catch((res)=> console.log( "Rejected",res))


// 6.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       resolve("Data has been successfully retrieved.");
//     } else {
//       reject("An error occurred while fetching data.");
//     }
//   }, 1000);
// });
// myPromise.then((data) => console.log(data))
//   .catch((error) => console.error(error));



//7. use asyc await for above example
//   function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         resolve("Data has been successfully retrieved.");
//       } else {
//         reject("An error occurred while fetching data.");
//       }
//     }, 1000);
//   });
// }
// async function fetchData() {
//   try {
//     const result = await getData(); 
//     console.log(result);
//   } catch (error) {
//     console.error(error); 
//   }
// }
// fetchData();



// 8.
//   let mypromise= new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         resolve("Data has been successfully retrieved.");
//       } else {
//         reject("An error occurred while fetching data.");
//       }
//     }, 1000);
//   });
// async function fetchData() {
//   try {
//     const result = await mypromise; 
//     console.log(result);
//   } catch (error) {
//     console.error(error); 
//   }
// }
// fetchData();


//9. promise.all with resolve
// const promise1 = Promise.resolve(123);
// const promise2 = 456;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');   
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


//10. promise.all with reject
// const promise1 = Promise.resolve(123);
// const promise2 = Promise.reject("Something went wrong");
// const promise3 = new Promise((resolve, reject) => {
//  setTimeout(()=>{
//     resolve("foo")},1000)
// });
// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("All resolved:", values);
//   })
//   .catch((error) => {
//     console.error("Promise.all failed:", error);
//   });



  // 11. promise.race
//   const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     resolve('two')
//   },100)
// });
// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
// });


//12  promise.race with reject
//   const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     reject('two')
//   },100)
// });
// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
// })
//   .catch((error) => {
//     console.error("Promise.race failed:", error);
//   });


//13. promise.allsetteled with reject
// const promise1 = Promise.resolve(123);
// const promise2 = Promise.reject("Something went wrong");
// const promise3 = new Promise((resolve, reject) => {
//  setTimeout(()=>{
//     resolve("foo")},1000)
// });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("All resolved:", values);
//   })
//   .catch((error) => {
//     console.error("Promise.all failed:", error);
//   });


//14. promise.any
// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order received")
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)})
//     Promise.any([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))


//15.
    // let p1 =  Promise.reject("food ordered")
    // let p2 = new Promise((res, rej)=>{
    // rej("order received")
    // })
    // let p3 = new Promise((res, rej)=>{
    // setTimeout(()=>{
    // res("order Delivered!")},2000)})
    // Promise.any([p1,p2,p3])
    // .then((results)=> console.log(results) )
    // .catch((message) => console.log(message))


    //16 promise.any with all rejection
    // let p1 =  Promise.reject("food ordered")
    // let p2 = new Promise((res, rej)=>{
    // rej("order received")
    // })
    // let p3 = new Promise((res, rej)=>{
    // setTimeout(()=>{
    // rej("order Delivered!")},2000)})
    // Promise.any([p1,p2,p3])
    // .then((results)=> console.log(results) )
    // .catch((message) => console.log(message))  
    // //[AggregateError: All promises were rejected] {[errors]: [ 'food ordered', 'order received', 'order Delivered!' ]}


//.17 finally
//   let p1 = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Mail has arrived");
//     } else {
//       reject(new Error("Failed to arrive"));
//     }
//   });
//   p1.then((mail) => {
//     console.log(mail);
//   })
// .catch((err) => {
//   console.error(err.message);
// })
//   .finally(() => {
//     console.log("Experiment completed");
//   });


// 18. async_await
//   let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello1"),3000)
// }
// );
//   let p2= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello2"),5000)
// }
// );
//   let p3= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello3"),1000)
// }
// );
//   let p4= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello4"),100)
// }
// );
// async function executePromises(){
//     let response1 = await p1
//     console.log(response1);
//     let response2 = await p2
//     console.log(response2);
//     let response3 = await p3
//     console.log(response3);
//     let response4 = await p4
//     console.log(response4);
// }
// executePromises().then(out => console.log(out))



// 19. async await with promise.all
//   let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello1"),3000)
// }
// );
//   let p2= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello2"),5000)
// }
// );
//   let p3= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello3"),1000)
// }
// );
//   let p4= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello4"),100)
// }
// );
// async function executePromises(){
//     let response1 = await Promise.all([p1,p2,p3,p4])
//     return response1
// }
// executePromises().then(out => console.log(out)) 



// 20. async await with promise.all with rejection
// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello1"),3000)
// }
// );
//   let p2= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello2"),5000)
// }
// );
//   let p3= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello3"),1000)
// }
// );
//   let p4= new Promise((resolve, reject) => {
//     setTimeout(()=> reject("hello4"),100)
// }
// );
// async function executePromises(){
//     try{
//  let response1 = await Promise.all([p1,p2,p3,p4])
//  return response1
//     } catch(error){
//         return error
        
//     }
//     return response1
// }
// executePromises().then(out => console.log(out)) 
// .catch(out => console.log("error ==>",out)) 



// 21. async await with promise.all with rejection without using then catch
// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello1"),3000)
// }
// );
//   let p2= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello2"),5000)
// }
// );
//   let p3= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello3"),1000)
// }
// );
//   let p4= new Promise((resolve, reject) => {
//     setTimeout(()=> reject("hello4"),100)
// }
// );
// async function executePromises(){
//     try{
//  let response1 = await Promise.all([p1,p2,p3,p4])
//         console.log(response1);
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// executePromises()



// 22.
// function returnPromises() {
//   var newPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Promise Executed...");
//       resolve("Sample Data");
//     }, 3000);
//   });
// }
// function ExecuteFunction() {
//   var newData = "Mayank";
//   var getPromise = returnPromises();
//   console.log(newData);
// }
// ExecuteFunction()



// 23.
function returnPromises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Executed...");
      resolve("Sample Data");
    }, 3000);
  });
}
async function ExecuteFunction() {
  var newData = "Mayank";
  var getData = await returnPromises();
  console.log(getData);
}
ExecuteFunction()