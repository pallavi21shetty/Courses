// let express= require('express')
// let mysql = require('mysql2');

// connection_string = {
//   host: 'localhost',
//   user: 'root',
//   database: 'world',
//     port: 3307, 
//       password: 'password',
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, 
//   idleTimeout: 60000, 
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// };

// const conn=mysql.createConnection(connection_string);
// query_string = "SELECT * FROM city limit 10";

// let getResults=(err,results,fields)=> {
// if(err) throw err
// console.log(results);
// console.log(fields);

// }
// conn.execute(query_string, getResults )













// let express= require('express')
// let mysql = require('mysql2');

// let app= express()

// connection_string = {
//   host: 'localhost',
//   user: 'root',
//   database: 'world',
//     port: 3307, 
//       password: 'password',
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, 
//   idleTimeout: 60000, 
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// };

// const conn=mysql.createConnection(connection_string);
// query_string = "SELECT * FROM city limit 10";

// let getcitys =(req,res)=>{
// conn.execute(query_string,(err,results,fields)=> {
// if(err) throw err
// res.send(results)
// })
// }

// app.get('/get_citys',getcitys)
// app.listen(3001)













let express= require('express')
let mysql = require('mysql2');

let app= express()

connection_string = {
  host: 'localhost',
  user: 'root',
  database: 'world',
    port: 3307, 
      password: 'password',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const conn=mysql.createConnection(connection_string);
query_string = "SELECT * FROM city limit 10";

app.get('/get_citys',(req, res)=>{
conn.execute(query_string,(err,results,fields)=> {
if(err) throw err
res.send(results)
})
})


app.listen(3001)