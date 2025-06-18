// let promise = new Promise((resolve, reject) => {
//     resolve("successfully executed")
// }
// );
// promise.then((res)=> console.log(res))


// let promise = new Promise((resolve, reject) => {
//     reject("successfully executed")
// }
// );
// promise.then((res)=> console.log(res)) // code: 'ERR_UNHANDLED_REJECTION'




// let promise = new Promise((resolve, reject) => {
//     reject("fail to execute")
// }
// );
// promise.then((res)=> console.log(res))
// .catch((res)=> console.log(res))



// let promise = new Promise((resolve, reject) => {
//     resolve("successfully executed")
//     reject("fail to execute")
// }
// );
// promise.then((res)=> console.log(res))
// .catch((res)=> console.log(res))


// let promise = new Promise((resolve, reject) => {
//     if(true){
//   resolve("successfully executed")
//     }
//   else{
//     reject("fail to execute")
//   }
// }
// );
// promise.then((res)=> console.log(res))
// .catch((res)=> console.log(res))



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


// let promise = new Promise((resolve, reject) => {
//         let asyncronous_function=false 
//         if(asyncronous_function){
//   resolve("successfully executed")
//     }
//   else{
//     reject("fail to execute")
//   }
// }
// );
// promise.then((res)=> console.log("resolved:",res))
// .catch((res)=> console.log( "Rejected",res))


// let promise = new Promise((resolve, reject) => {
//         let asyncronous_function=true 
//         if(asyncronous_function){
//   resolve("successfully executed")
//     }
//   else{
//     reject("fail to execute")
//   }
// }
// );
// promise.then((res)=> console.log("resolved:",res))
// .catch((res)=> console.log( "Rejected",res))



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
// .catch((res)=> console.log( "Rejected",res))


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
// .catch((res)=> console.log( "Rejected",res))
// console.log("Done!!");



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


// let swigy_order = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=true 
//         if(asyncronous_function){
//   resolve("Accepted order! ")
//     }
//   else{
//     reject("shop closed")
//   }
// },2000)
// }
// );
// swigy_order.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("your order will delivery shortly"))
// .catch((res)=> console.log( "Rejected",res))


// let swigy_order = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=false
//         if(asyncronous_function){
//   resolve("Accepted order! ")
//     }
//   else{
//     reject("shop closed")
//   }
// },2000)
// }
// );
// swigy_order.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("your order will delivery shortly"))
// .catch((res)=> console.log( "Rejected",res))



// let swigy_order = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=false
//         if(asyncronous_function){
//   resolve("Accepted order! ")
//     }
//   else{
//     reject("shop closed")
//   }
// },2000)
// }
// );
// swigy_order.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("your order will delivery shortly"))
// .catch((res)=> console.log( "Rejected",res))
// .finally(() => console.log("transaction complited"))



// let swigy_order = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=true
//         if(asyncronous_function){
//   resolve("Accepted order! ")
//     }
//   else{
//     reject("shop closed")
//   }
// },2000)
// }
// );
// swigy_order.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("your order will delivery shortly"))
// .catch((res)=> console.log( "Rejected",res))
// .finally(() => console.log("transaction complited"))



// let swigy_order = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let asyncronous_function=true
//         if(asyncronous_function){
//   resolve("Accepted order! ")
//     }
//   else{
//     reject("shop closed")
//   }
// },2000)
// }
// );
// swigy_order.then((res)=> console.log("resolved:",res))
// .then(()=> console.log("your order will delivery shortly"))
// .catch((res)=> console.log( "Rejected",res))
// console.log("transaction complited")


// let p1 =  Promise.resolve(10)
// let p2 = new Promise((res, rej)=>{
//     res(20)
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res(20)},2000)})
//     Promise.all([p1,p2,p3])


// let p1 =  Promise.resolve(10)
// let p2 = new Promise((res, rej)=>{
//     res(20)
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res(80)},2000)})
//     Promise.all([p1,p2,p3]).then((results)=> console.log(results) )


// let p1 =  Promise.resolve(10)
// let p2 = new Promise((res, rej)=>{
//     res(20)
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res(80)},2000)})
//     Promise.all([p3,p2,p1]).then((results)=> console.log(results) )


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order received")
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)})
//     Promise.all([p1,p2,p3]).then((results)=> console.log(results) )


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     rej("order out of stock")  //'ERR_UNHANDLED_REJECTION'
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)})
//     Promise.all([p1,p2,p3]).then((results)=> console.log(results) )


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     rej("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)})
//     Promise.all([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))



// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     rej("order not  Delivered!")},2000)})
//     Promise.all([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))



// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     rej("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     rej("order not  Delivered!")},2000)})
//     Promise.all([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))

// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order not  Delivered!")},2000)})
//     Promise.all([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))



// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order received")
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)}) 
// Promise.race([p1,p2,p3])//which is give only first race
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order received")
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order Delivered!")},2000)})
//     Promise.race([p3,p2,p1])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     res("order not  Delivered!")},2000)})
//     Promise.allSettled([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))


// let p1 =  Promise.resolve("food ordered")
// let p2 = new Promise((res, rej)=>{
//     res("order out of stock")  
// })
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//     rej("order not  Delivered!")},2000)})
//     Promise.allSettled([p1,p2,p3])
//     .then((results)=> console.log(results) )
//     .catch((message) => console.log(message))


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


let p1 =  Promise.reject("food ordered")
let p2 = new Promise((res, rej)=>{
    rej("order received")
})
let p3 = new Promise((res, rej)=>{
    setTimeout(()=>{
    rej("order Delivered!")},2000)})
    Promise.any([p1,p2,p3])
    .then((results)=> console.log(results) )
    .catch((message) => console.log(message))  
    //[AggregateError: All promises were rejected] {[errors]: [ 'food ordered', 'order received', 'order Delivered!' ]}
