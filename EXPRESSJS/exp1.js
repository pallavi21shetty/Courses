// let express = require("express")
// let app = express()
// app.get('',  (req,res)=>{
// res.send("welcome to itdefined")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))


// let express = require("express")
// let app = express()
// app.get('',  (req,res)=>{
// res.send("welcome to itdefined")
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))


// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('',  (req,res)=>{
// res.send("<h1 style = 'text-align:center;'>welcome to itdefined</h1>")
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



// get
// post 
// patch 
// put 
// delete




// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:user',  (req,res)=>{  //expecting some thing 
// res.send("<h1 style = 'text-align:center;'>welcome to itdefined</h1>")
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get(':user',  (req,res)=>{  // not get any thing / reuired
// res.send("<h1 style = 'text-align:center;'>welcome to itdefined</h1>")
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:user',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> hi ${req} welcome to itdefined</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))


// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:user',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> hi ${req.params.user} welcome to itdefined</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:user/:company',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> hi ${req.params.user} welcome to ${req.params.company}</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))


// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:userId',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> your user ID : ${req.params.userId}</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get(' ',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> your user ID </h1>`)
// });
// app.get(`/:userId(\\d{2,3})`,  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> your user ID : ${req.params.userId}</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))




// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:userId?',  (req,res)=>{  
// res.send(`<h1 style = 'text-align:center;'> your user ID : ${req.params.userId}</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))


// let express = require("express");
// const { get } = require("http");
// let app = express()
// app.get('/:userId?',  (req,res)=>{ 
//      let user_id= req.params.userId
//     if (!user_id){
//         user_id=0
//     }
// res.send(`<h1 style = 'text-align:center;'> your user ID : ${user_id}</h1>`)
// });
// app.get('/about',  (req,res)=>{
// res.send("welcome to about")
// });
// app.get('/contact',  (req,res)=>{
// res.send("welcome to contact page")
// });
// app.get('/blog',  (req,res)=>{
// res.send("welcome to blog page")
// });
// app.listen(3000, ()=> console.log("connected to server at 3000 port!"))



let express = require("express");
const { get } = require("http");
let app = express()
app.get('/:user?',  (req,res)=>{ 
     let user= req.params.user
    if (!user){
        user="Guest"
    }
res.send(`<h1 style = 'text-align:center;'> Hi ${user}</h1>`)
});
app.get('/about',  (req,res)=>{
res.send("welcome to about")
});
app.get('/contact',  (req,res)=>{
res.send("welcome to contact page")
});
app.get('/blog',  (req,res)=>{
res.send("welcome to blog page")
});
app.listen(3000, ()=> console.log("connected to server at 3000 port!"))
