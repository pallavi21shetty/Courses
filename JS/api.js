// fetch api using server
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API Server!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
