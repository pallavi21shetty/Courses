// let express = require("express")
// let app = express()
// //route handler
// app.get('/',(req,res,next)=>{
//     console.log('execting handler');
//     res.send('Hello, world!');
//     next()
// });
// app.listen(3000, ()=> 
//     console.log("connected to server at 3000 port!"))

//if any err we can use
// app.listen(3000, (err)=> 
//     console.log("connected to server at 3000 port!"))





// let express = require("express")
// let app = express()
// //middleware 1
// app.use((req,res,next)=> {
//     console.log('middleware 1');
//     next();
// })
// //middleware 2
// app.use((req,res,next)=> {
//     console.log('middleware 2');
//     next();
// })
// //route handler
// app.get('/',(req,res,next)=>{
//     console.log('execting handler');
//     res.send('Hello, world!');
//     next()
// });
// //midleware 3
// app.use((req,res,next)=> {
//     console.log('middleware 3');
//     next();
// })
// app.listen(3000, ()=> 
//     console.log("connected to server at 3000 port!"))



// let express = require("express")
// let app = express()
// //middleware 1
// app.use((req,res,next)=> {
//     console.log('middleware 1');
//     res.send('Hello,');
//     next();
// })
// //middleware 2
// app.use((req,res,next)=> {
//     console.log('middleware 2');
//     next();
// })
// //route handler
// app.get('/',(req,res,next)=>{
//     console.log('execting handler');
//     res.send('Hello, world!');           // give error already res sent
//     next()
// });
// //midleware 3
// app.use((req,res,next)=> {
//     console.log('middleware 3');
//     next();
// })
// app.listen(3000, ()=> 
//     console.log("connected to server at 3000 port!"))




// let express = require("express")
// let app = express()
// //middleware 1
// app.use((req,res,next)=> {
//     console.log('middleware 1');
   
//     next();
// })
// //middleware 2
// app.use((req,res,next)=> {
//     console.log('middleware 2');
//     next();
// })
// //route handler
// app.get('/',(req,res,next)=>{
//     console.log('execting handler');
//     res.send('Hello, world!');
  
// });
// //midleware 3                                            // next executes midle ware 3 since next() not given 
// app.use((req,res,next)=> {
//     console.log('middleware 3');
//      res.send('Hello,');
//     next();
// })
// app.listen(3000, ()=> 
//     console.log("connected to server at 3000 port!"))






let express = require("express")
let app = express()
app.get('/customer',(req,res,next)=>{
    console.log('execting handler');
    res.send('Hello, world!');
    next()
});
app.get('/customer/login',(req,res,next)=>{
    console.log('execting handler');
    res.send('Hello, world!');
    next()
});
app.get('/customer/profile',(req,res,next)=>{
    console.log('execting handler');
    res.send('Hello, world!');
    next()
});
app.get('/seller',(req,res,next)=>{
    console.log('execting handler');
    res.send('Hello, world!');
    next()
});
app.listen(3000, ()=> 
    console.log("connected to server at 3000 port!"))


