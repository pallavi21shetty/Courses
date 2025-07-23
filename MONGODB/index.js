// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/test'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const Users = mongoose.model('Users',{}, 'users');
// app.get('', (req, res)=>{ Users.find().then(users=>res.json(users)) 
// })
// app.listen(3000)


// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const city = mongoose.model('city',{}, 'city');
// app.get('', (req, res)=>{ 
//    city.find({}).limit(10).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )





// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// app.get('', (req, res)=>{ 
//     cities.find({}).limit(10).then(users=>res.json(users)) 
// })
// app.get('/:state_id', (req, res)=>{
//     let state=req.params.state_id 
//    cities.find({state_id:parseInt()}).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )




// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// app.get('', (req, res)=>{ 
//     cities.find({}).limit(10).then(users=>res.json(users)) 
// })
// app.get('/:state_id', (req, res)=>{
//     let state=req.params.state_id 
//    cities.find({state_id:parseInt(state), name:"Lab-sar"}).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )

//in mongobd shelll
// mongosh
// use world_db
// show collections
//db.cities.find({state_id:3884, name:"Lab-sar"})




// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// app.get('', (req, res)=>{ 
//     cities.find({}).limit(10).then(users=>res.json(users)) 
// })
// app.get('/:state_id', (req, res)=>{
//     let state=req.params.state_id 
//    cities.find({$and :[{state_id:"value"}]}).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )




// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// // app.get('', (req, res)=>{ 
// //     cities.find({}).limit(10).then(users=>res.json(users)) 
// // })
// app.get('/:state_id', (req, res)=>{
//     let state=req.params.state_id 
//    cities.find({$and :[{country_name:"Afghanistan"},{state_name:"Baghlan"}]}).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )


// express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// // app.get('', (req, res)=>{ 
// //     cities.find({}).limit(10).then(users=>res.json(users)) 
// // })
// app.get('/:state_id', (req, res)=>{
//    cities.find({$or :[{country_name:"Afghanistan"},{state_name:"Baghlan"}]}).then(users=>res.json(users))
//     //cities.find({$nor :[{country_name:"Afghanistan"},{state_name:"Baghlan"}]}).then(users=>res.json(users))  
//     // cities.find({latitude:{$lte:"41", $gte:"40"}}).then(users=>res.json(users)) 
//     cities.find({name:/^Ban$/}).then(users=>res.json(users)) 
// })  
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )


// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// let connection_url = 'mongodb://localhost:27017/world_db'
// mongoose.connect(connection_url)
// .then(() => console.log('Connected!')); 
// const  cities = mongoose.model('cities',{}, 'cities');
// app.get('', (req, res)=>{ 
//     cities.find({}).limit(10).sort({name:1}).then(users=>res.json(users)) 
// })
// app.get('/:state_id', (req, res)=>{
//     let state=req.params.state_id 
//    cities.find({$and :[{country_name:"Afghanistan"},{state_name:"Baghlan"}]}).then(users=>res.json(users)) 
// })
// app.listen(3000,console.log(`running on http://localhost:3000`)
// )



const express = require("express")
const mongoose = require("mongoose")
const app = express()
let connection_url = 'mongodb://localhost:27017/world_db'
mongoose.connect(connection_url)
.then(() => console.log('Connected!')); 
const  cities = mongoose.model('cities',{}, 'cities');
app.get('', (req, res)=>{ 
    cities.find({}).limit(10).sort({name:1}).skip(100).then(users=>res.json(users)) 
})
app.get('/:state_id', (req, res)=>{
    let state=req.params.state_id 
   cities.find({$and :[{country_name:"Afghanistan"},{state_name:"Baghlan"}]}).then(users=>res.json(users)) 
})
app.listen(3000,console.log(`running on http://localhost:3000`)
)