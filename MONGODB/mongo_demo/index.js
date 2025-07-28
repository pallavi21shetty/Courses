// const express = require("express")
// const mongoose = require("mongoose")
// let connection_url = 'mongodb://localhost/27017/test'
// mongoose.connect(connection_url)
//   .then(() => console.log('Connected!'));



// const express = require("express")
// const mongoose = require("mongoose")
// let connection_url = 'mongodb://localhost:27017/test'
// mongoose.connect(connection_url)
//   .then(() => console.log('Connected!'));

//   const Users = mongoose.model('Users',{},'users');

// //   Users.find({}).then(users=>console.log(users))
// // Users.findOne({}).then(users=>console.log(users))
//   Users.find({firstname:"Jane"}).then(users=>console.log(users))







// same data in express js

// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/test'
// mongoose.connect(connection_url)
//   .then(() => console.log('Connected!'));
//   const Users = mongoose.model('Users',{},'users');
  
//   app.get('',(req,res)=>{
// Users.find({firstname:"Jane"}).then(users=>res.json(users))

//   })
//   app.listen(3000)


const express = require("express")
const mongoose = require("mongoose")
const app = express()
let connection_url = 'mongodb://localhost:27017/test'
mongoose.connect(connection_url)
  .then(() => console.log('Connected!'));
  const Users = mongoose.model('Users',{},'users');
  
  app.get('',(req,res)=>{
Users.find().then(users=>res.json(users))

  })
  app.listen(3000)