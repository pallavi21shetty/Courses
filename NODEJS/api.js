// fetching data from api
//   fetch('https://official-joke-api.appspot.com/random_joke')
//   .then(response => response.json())       // Convert response to JSON
//   .then(data => {
//     console.log("Joke:", data.setup);
//     console.log("Punchline:", data.punchline);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });



// create server
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


// fetch api using server
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const PORT = 3000;
// app.get('/users', async (req, res) => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch data from external API' });
//   }
// });
// app.get('/', (req, res) => {
//   res.send('Welcome to the Node.js API Server!');
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


async function fetchCategories() {
  try {
    const response = await fetch("https://fakestoreapi.in/api/products/category");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const categories = await response.json();
    console.log("Product Categories:",categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error.message);
  }
}
fetchCategories();


fetch("https://fakestoreapi.in/api/products/category")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then((categories) => {
    console.log("Product Categories:", categories);
  })
  .catch((error) => {
    console.error("Failed to fetch categories:", error.message);
  });


