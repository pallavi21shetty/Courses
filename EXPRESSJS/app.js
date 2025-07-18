// let express = require("express")
// let app = express()
// let port=3000

// let customer=require('./customer') // external file router
// app.use('/customer',customer)

// let seller=require('./seller') 
// let admin=require('./admin') 
// app.use('/seller',seller)
// app.use('/admin',admin)

// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))










//static folders

// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// app.get('/',(req,res)=>
// res.send('HTML/T4.html'))

// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))

// output plane text HTML/T4.html





// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// app.get('/',(req,res)=>
// res.sendFile('HTML/T4.html'))

// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))

// get the error TypeError: path must be absolute or specify root to res.sendFile



// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// app.get('/',(req,res)=>
// res.sendFile('./HTML/T4.html'))//go back one step in directory . used so

// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))

//still gets same error we have to use middlieware




// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// console.log(__dirname); //current working drectory

// app.use(express.static(path.join(__dirname,'PUBLIC')))

// app.get('/',(req,res)=>
// res.sendFile('index.html'))

// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))


//otherway

// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// console.log(__dirname); //current working drectory

// app.use('/static',express.static(path.join(__dirname,'PUBLIC')))

// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'PUBLIC','index.html'))
// })
// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))



// let express = require("express")
// const path=require('path')
// let app = express()
// let port=3000

// console.log(__dirname); //current working drectory

// app.use('/static',express.static(path.join(__dirname,'HTML')))

// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'HTML','T1.html'))
// })
// app.listen(port, ()=> 
//     console.log("connected to server at 3000 port!"))

//only within that folder file can be passed complete outside other folder file can't
//Error: ENOENT: no such file or directory, stat 'C:\Users\HP\OneDrive\Documents\Courses\EXPRESSJS\HTML\T1.html'


let express = require("express")
const path=require('path')
let app = express()
let port=3000

console.log(__dirname); //current working drectory

app.use('/static',express.static(path.join(__dirname,'..','HTML')))

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'..','HTML','T2.html'))
})
app.listen(port, ()=> 
    console.log("connected to server at 3000 port!"))

// it works