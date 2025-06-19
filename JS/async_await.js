// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello"),3000)
// }
// );
// p1.then((res)=> console.log(res))
// .catch((err) => console.log(err))



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello"),3000) 
// }
// );
// function executePromises(){
//     let response =p1
//     console.log(response);
// }
// executePromises()



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello"),3000)}
// );
// function executePromises(){
//     let response =p1
//     console.log(response);
// }
// executePromises().catch(err =>console.log(err)
// )



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello"),3000)
// }
// );
// async function executePromises(){
//     let response = await p1
//     console.log(response);
// }
// executePromises().catch(err =>console.log(err))



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> reject("hello"),3000)
// }
// );
// async function executePromises(){
//     let response = await p1
//     console.log(response);
// }
// executePromises().catch(err =>console.log(err))



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> reject("hello"),3000)
// }
// );
// async function executePromises(){
//     let response = await p1
//     console.log(response);
// }
// executePromises().catch(err =>console.log("===>",err))



// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> reject("hello"),3000)
// }
// );
// async function executePromises(){
//     let response = await p1
//     console.log(response);
// }
// executePromises() //  code: 'ERR_UNHANDLED_REJECTION'



//   let p1= new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("hello"),3000)
// }
// );
// async function executePromises(){
//     let response = await p1
//     console.log(response);
// }
// executePromises()



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
// executePromises()




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
//     let response2 = await p2
//     let response3 = await p3
//     let response4 = await p4
//     console.log(response4);
// }
// executePromises().then(res => console.log(res))



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
//     let response2 = await p2
//     let response3 = await p3
//     let response4 = await p4
//    return "all execution completed"
// }
// executePromises().then(res => console.log(res))



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
//     setTimeout(()=> reject("hello4"),100)
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
// executePromises().then(out => console.log(out)) //'ERR_UNHANDLED_REJECTION'



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





//  let p1= new Promise((resolve, reject) => {
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
//     let response1 = await Promise.all([p1,p2,p3,p4])
//     return response1
// }
// executePromises().then(out => console.log(out))  //  code: 'ERR_UNHANDLED_REJECTION'





//  let p1= new Promise((resolve, reject) => {
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
//     } catch(error){
//         console.log(err);
        
//     }
//     return response1
// }
// executePromises().then(out => console.log(out)) 
// .catch(out => console.log(out)) 



//  let p1= new Promise((resolve, reject) => {
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



 let p1= new Promise((resolve, reject) => {
    setTimeout(()=> resolve("hello1"),3000)
}
);
  let p2= new Promise((resolve, reject) => {
    setTimeout(()=> resolve("hello2"),5000)
}
);
  let p3= new Promise((resolve, reject) => {
    setTimeout(()=> resolve("hello3"),1000)
}
);
  let p4= new Promise((resolve, reject) => {
    setTimeout(()=> resolve("hello4"),100)
}
);
async function executePromises(){
    try{
 let response1 = await Promise.all([p1,p2,p3,p4])
 return response1
    } catch(error){
        return error
        
    }
    return response1
}
executePromises().then(out => console.log(out)) 
.catch(out => console.log("error ==>",out)) 