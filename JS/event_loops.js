// function fun1(){
//     console.log("function 1 executed");
// }

// function fun2(){
//     console.log("function 2 executed");
// }

// function fun3(){
//     console.log("function 3 executed");
// }

// function fun4(){
//     console.log("function 4 executed");
// }
// fun1()
// fun2()
// fun3()
// fun4()


// function fun1(){
//     console.log("function 1 executed");
// }

// function fun2(){
//     console.log("function 2 executed");
// }

// function fun3(){
//     setTimeout(()=> console.log("function 3 executed"),3000);
// }

// function fun4(){
//     console.log("function 4 executed");
// }
// fun1()
// fun2()
// fun3()
// fun4()



// let isDelivered =false
// function fun1(){
//     console.log("create order");
// }

// function fun2(){
//     console.log("make a payment");
// }

// function fun3(){
//     setTimeout(()=> {
//         console.log("Delivery the order"),
//         isDelivered=true}, 3000);
// }

// function fun4(){
//     if (isDelivered){
//     console.log("Eat");
//     }
// }
// fun1()
// fun2()
// fun3()
// fun4()



// let isDelivered =false
// function fun1(){
//     console.log("create order");
// }

// function fun2(){
//     console.log("make a payment");
// }

// function fun3(){
//     setTimeout(()=> {
//         console.log("Delivery the order"),
//         isDelivered=true}, 3000);
// }

// function fun4(){
//     if (isDelivered){
//     console.log("Eat");
//     }
// }
// fun1()
// fun2()
// fun3()
// let intervalId = setInterval(fun4,1000)




// let isDelivered =false
// function fun1(){
//     console.log("create order");
// }

// function fun2(){
//     console.log("make a payment");
// }

// function fun3(){
//     setTimeout(()=> {
//         console.log("Delivery the order"),
//         isDelivered=true}, 3000);
// }

// function fun4(){
//     if (isDelivered){
//     console.log("Eat");
//     clearInterval(intervalId)
//     }
// }
// fun1()
// fun2()
// fun3()
// let intervalId = setInterval(fun4,1000)




// let isDelivered =false
// function fun1(){
//     console.log("create order");
// }

// function fun2(){
//     console.log("make a payment");
// }

// function fun3(cb){
//     setTimeout(()=> {
//         console.log("Delivery the order")
//         cb()
//         }, 3000);
// }

// function fun4(){
//     console.log("Eat");
//     }

// fun1()
// fun2()
// fun3(fun4)




let isDelivered =false
function fun1(cb1, cb2, cb3){
    console.log("create order");
    cb1(cb2, cb3)
}

function fun2(cb2, cb3){
    console.log("make a payment");
        cb2(cb3)
}

function fun3(cb){
    setTimeout(()=> {
        console.log("Delivery the order")
        cb()
        }, 3000);
}

function fun4(){
    console.log("Eat");
    }

fun1(fun2, fun3, fun4)
