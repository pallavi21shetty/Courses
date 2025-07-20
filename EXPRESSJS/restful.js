// let express = require('express')
// let app = express()
// let user_data=[
//     {id:1, name:"Sachin", email:"sachin@gmail.com"},
//     {id:2, name:"Rohith", email:"rohith@gmail.com"}
// ]
// app.get('/user',(req,res)=>{
//     res.json(user_data)
// })
// app.listen(3000, ( )=>console.log('running on 3000 port'))




// let express = require('express')
// let app = express()
// let user_data=[
//     {id:1, name:"Sachin", email:"sachin@gmail.com"},
//     {id:2, name:"Rohith", email:"rohith@gmail.com"}
// ]
// app.get('/user',(req,res)=>{
//     res.json(user_data)
// })
// app.get('/user/:id',(req,res)=>{
//     let user_id=req.params.id
//     let filtered_user_data=user_data.find(user=> user.id==user_id)
//     if(filtered_user_data){
//         res.json(filtered_user_data)
//     }
//     else{
//         res.json({message:"invalid user id"})
//     }
// })
// app.listen(3000, ( )=>console.log('running on 3000 port'))






// let express = require('express')
// let bodyParser =require('body-parser')
// let app = express()
// app.use(bodyParser.json())
// let user_data=[
//     {id:1, name:"Sachin", email:"sachin@gmail.com"},
//     {id:2, name:"Rohith", email:"rohith@gmail.com"}
// ]
// let incId=3
// app.get('/user',(req,res)=>{
//     res.json(user_data)
// })
// app.get('/user/:id',(req,res)=>{
//     let user_id=req.params.id
//     let filtered_user_data=user_data.find(user=> user.id==user_id)
//     if(filtered_user_data){
//         res.json(filtered_user_data)
//     }
//     else{
//         res.json({message:"invalid user id"})
//     }
// })
// app.post('/user', (req,res)=>{
//     let inp_name=req.body.some_name
//     let inp_email=req.body.some_email
//     new_data={id:incId++, name:inp_name, email:inp_email}
//     user_data.push(new_data)
//     res.json(user_data)
// })

// app.listen(3000, ( )=>console.log('running on 3000 port'))










// let express = require('express')
// let bodyParser =require('body-parser')
// let app = express()
// app.use(bodyParser.json())
// let user_data=[
//     {id:1, name:"Sachin", email:"sachin@gmail.com"},
//     {id:2, name:"Rohith", email:"rohith@gmail.com"}
// ]
// let incId=3
// app.get('/user',(req,res)=>{
//     res.json(user_data)
// })
// app.get('/user/:id',(req,res)=>{
//     let user_id=req.params.id
//     let filtered_user_data=user_data.find(user=> user.id==user_id)
//     if(filtered_user_data){
//         res.json(filtered_user_data)
//     }
//     else{
//         res.json({message:"invalid user id"})
//     }
// })
// app.post('/user', (req,res)=>{
//     let inp_name=req.body.some_name
//     let inp_email=req.body.some_email
//     new_data={id:incId++, name:inp_name, email:inp_email}
//     user_data.push(new_data)
//     res.json(user_data)
// })
// app.put('/user/:id', (req,res)=>{
// let user_id=req.params.id
//     let inp_name=req.body.some_name
//     let inp_email=req.body.some_email
//     console.log(user_id,user_data);
// let filtered_user_data_index=user_data.findIndex(user=> user.id==user_id)
// console.log(filtered_user_data_index);

// if(filtered_user_data_index ==-1){
//     res.json({message:"invalid user id"})
//     }
//     else{
//         user_data[filtered_user_data_index]= {id:user_id, name:inp_name, email:inp_email}
//         res.json(user_data)
//     }
// })
// app.listen(3000, ( )=>console.log('running on 3000 port'))











// let express = require('express')
// let bodyParser =require('body-parser')
// let app = express()
// app.use(bodyParser.json())
// let user_data=[
//     {id:1, name:"Sachin", email:"sachin@gmail.com"},
//     {id:2, name:"Rohith", email:"rohith@gmail.com"}
// ]
// let incId=3
// app.get('/user',(req,res)=>{
//     res.json(user_data)
// })
// app.get('/user/:id',(req,res)=>{
//     let user_id=req.params.id
//     let filtered_user_data=user_data.find(user=> user.id==user_id)
//     if(filtered_user_data){
//         res.json(filtered_user_data)
//     }
//     else{
//         res.json({message:"invalid user id"})
//     }
// })
// app.post('/user', (req,res)=>{
//     let inp_name=req.body.some_name
//     let inp_email=req.body.some_email
//     new_data={id:incId++, name:inp_name, email:inp_email}
//     user_data.push(new_data)
//     res.json(user_data)
// })
// app.put('/user/:id', (req,res)=>{
// let user_id=req.params.id
//     let inp_name=req.body.some_name
//     let inp_email=req.body.some_email
//     console.log(user_id,user_data);
// let filtered_user_data_index=user_data.findIndex(user=> user.id==user_id)
// console.log(filtered_user_data_index);

// if(filtered_user_data_index ==-1){
//     res.json({message:"invalid user id"})
//     }
//     else{
//         user_data[filtered_user_data_index]= {id:user_id, name:inp_name, email:inp_email}
//         res.json(user_data)
//     }
// })
// app.patch('/user/:id', (req,res)=>{
// let user_id=req.params.id
//     let inp_body=req.body
// let filtered_user_data_index=user_data.findIndex(user=> user.id==user_id)
// if(filtered_user_data_index ==-1){
//     res.json({message:"invalid user id"})
//     }
//     else{
//         Object.keys(inp_body).forEach(key =>{
//             if(key == user_data[filtered_user_data_index]){
//                 user_data[filtered_user_data_index][key]=inp_body[key]
//             }
//         })
//         res.json(user_data)
//     }
// })
// app.listen(3000, ( )=>console.log('running on 3000 port'))













let express = require('express')
let bodyParser =require('body-parser')
let app = express()
app.use(bodyParser.json())
let user_data=[
    {id:1, name:"Sachin", email:"sachin@gmail.com"},
    {id:2, name:"Rohith", email:"rohith@gmail.com"}
]
let incId=3
app.get('/user',(req,res)=>{
    res.json(user_data)
})
app.get('/user/:id',(req,res)=>{
    let user_id=req.params.id
    let filtered_user_data=user_data.find(user=> user.id==user_id)
    if(filtered_user_data){
        res.json(filtered_user_data)
    }
    else{
        res.json({message:"invalid user id"})
    }
})
app.post('/user', (req,res)=>{
    let inp_name=req.body.some_name
    let inp_email=req.body.some_email
    new_data={id:incId++, name:inp_name, email:inp_email}
    user_data.push(new_data)
    res.json(user_data)
})
app.put('/user/:id', (req,res)=>{
let user_id=req.params.id
    let inp_name=req.body.some_name
    let inp_email=req.body.some_email
    console.log(user_id,user_data);
let filtered_user_data_index=user_data.findIndex(user=> user.id==user_id)
console.log(filtered_user_data_index);

if(filtered_user_data_index ==-1){
    res.json({message:"invalid user id"})
    }
    else{
        user_data[filtered_user_data_index]= {id:user_id, name:inp_name, email:inp_email}
        res.json(user_data)
    }
})
app.patch('/user/:id', (req,res)=>{
let user_id=req.params.id
    let inp_body=req.body
let filtered_user_data_index=user_data.findIndex(user=> user.id==user_id)
if(filtered_user_data_index ==-1){
    res.json({message:"invalid user id"})
    }
    else{
        Object.keys(inp_body).forEach(key =>{
            if(key == user_data[filtered_user_data_index]){
                user_data[filtered_user_data_index][key]=inp_body[key]
            }
        })
        res.json(user_data)
    }
})
app.delete('/user/:id', (req,res)=>{
let user_id=req.params.id
user_data=user_data.filter(user=> user.id != user_id)
res.json(user_data)
})
app.listen(3000, ( )=>console.log('running on 3000 port'))