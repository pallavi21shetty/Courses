// let http = require('http')
// let server = http.createServer((request, response)=>{
// if(request.url== '/about'){
// response.write("home page")
// response.end();
// }
// if(request.url== '/contact'){
// response.write("contact page")
// response.end();
// }
// if(request.url== '/blog'){
// response.write("blog page")
// response.end();
// }
// else{
//     response.write("home page")
//     response.end();
// }

// })
// function simple(){
//     console.log("welcome");
    
// }
   
// server.listen(3000,simple)





// let http = require('http');

// let server = http.createServer((request, response) => {
//   if (request.url == '/about') {
//     response.write("about page");
//     response.end();
//   } else if (request.url == '/contact') {
//     response.write("contact page");
//     response.end();
//   } else if (request.url == '/blog') {
//     response.write("blog page");
//     response.end();
//   } else {
//     response.write("home page");
//     response.end();
//   }
// });
// // Define the callback function to run after server starts
// function simple() {
//   console.log("Server started on http://localhost:3000");
// }
// // Start server and run the simple() function when it's ready
// server.listen(3000, simple);




// const http = require('http');
// const server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' }); //The writeHead method sets the HTTP status code and headers, 
//     response.end('Hello, welcome!\n');//while the end method sends the response body.
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });




// const fs=require('fs')
// const http = require( 'http')
// // Creating Server 
// http.createServer((req, res) =>{
//     // Reading file 
//     fs.readFile(`serving_files.js`, function (err,filedata){
//       if (err) {
//         //   Handling error 
//         res.writeHead(404);
//         res.end(JSON.stringify(err));
//         return;
//       }
//     //   serving file to the server 
//       res.writeHead(200);
//       res.end(filedata);
//     });
// }).listen(80,'localhost');



// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write("<h1>Home Page</h1>");
//   } else if (req.url === '/about') {
//     res.write("<h1>About Page</h1>");
//   } else {
//     res.write("<h1>404 - Page Not Found</h1>");
//   }
//   res.end();
// });
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });











// function homeRoute() {
//   return (req, res) => {
//     res.write("<h1>Home Page</h1>");
//     res.end();
//   };
// }
// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     return homeRoute()(req, res); // returned function is immediately used
//   }
// });
// server.listen(3000, () => {
//   console.log("Listening on port 3000");
// });










const http = require('http');
const server = http.createServer((req, res) => {
  res.write("Hello ");
  res.write("World!");
  res.end(); // required to end the response
});
server.listen(3000);