// let express =require('express')
// let mysql =require('mysql2')
// let app= express()
// const port = 3000
// let register_function =()=>{
//     return "success"  // "no"  or other thing will give failed registered
// }
// app.post('/register',(req,res)=>{
//     let out=register_function()
//     if(out.toLocaleLowerCase().includes('success')){
//         res.send("successfully registered")
//     }
//     else{
//         res.send("failed registered")
//     }
// })
// app.listen(port, ()=>{
//     console.log("Running on 3000 port");
// })









// let express =require('express')
// let mysql =require('mysql2')
// let app= express()
// const port = 3000
// app.use(express.json())    // by this middleware what ever we are sending in the body of post method we are geting in console
// let register_function =()=>{
//     return "success"  
// }
// app.post('/register',(req,res)=>{
//     console.log("=====>",req.body); //here we are getting
    
//     let out=register_function()
//     if(out.toLocaleLowerCase().includes('success')){
//         res.send("successfully registered")
//     }
//     else{
//         res.send("failed registered")
//     }
// })
// app.listen(port, ()=>{
//     console.log("Running on 3000 port");
// })








// let express =require('express')
// let mysql =require('mysql2')
// let app= express()
// const port = 3000
// app.use(express.json())
// const db=mysql.createConnection
//  const connection =  mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test2',
//     port:3307,
//     password:'password',
//   });
// connection.connect()
// let register_function =()=>{
//     return "no"  
// }
// app.post('/register',(req,res)=>{
//     console.log("=====>",req.body);
    
//     let out=register_function()
//     if(out.toLocaleLowerCase().includes('success')){
//         res.send("successfully registered")
//     }
//     else{
//         res.send("failed registered")
//     }
// })
// app.listen(port, ()=>{
//     console.log("Running on 3000 port");
// })




let express =require('express')
let mysql =require('mysql2')
let app= express()
const port = 3000
app.use(express.json())
 const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test2',
    port:3307,
    password:'password',
  });
connection.connect()
let register_function =(user_name,email,password,callback)=>{
    
    let output
    let query = `insert into users (user_name,email,password) values ('${user_name}','${email}','${password}')` 
        connection.query(query,(err,result,fields)=>{
                if(err){
                    output=err
                 callback(err.message)  
                }
                else{
                    callback("success")
                }
        })
}
app.post('/register',(req,res)=>{
    console.log("=====>",req.body);
    let{name,email,password} = req.body
    let out=register_function(name,email,password,(out)=>{
    if(out.toLocaleLowerCase().includes('success')){
        res.send("successfully registered")
    }
    else{
        res.send("failed registered")
    }
    })
})
app.listen(port, ()=>{
    console.log("Running on 3000 port");
})