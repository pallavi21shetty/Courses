const express = require('express');
const app = express();
const users = [
{id: 1, name: 'John Doe' },
 {id: 2, name: 'Jane Smith' }
];

// Route to send plain text response
app.get('/text', (req, res) => {
res.send('Hello World');
});

// Route to send HTML response
app.get('/html', (req, res) =>
 { res.send('<h1>Hello World</h1>');
});

// Route to send JSON response
app.get('/json', (req, res) => {
res.json({ message: 'Hello World' });
});

// Route to initiate file download 
app.get('/download', (req, res) =>{
const filePath = 'expamaple.txt';
res.download(filePath);
});
 
 // Raute to redirect to another URL
 app.get('/redirect', (req, res)=> {
 res.redirect('/json');
});

 // Route to set HTTP status code and send response
 app.get('/status', (req, res) =>{
 res.status(404).send('Not Found');
});

 // Route to send a file as an octet stream
app.get('/file', (req, res) => {
 const filePath = __dirname+'/expamaple.txt';
 res.sendFile(filePath);
 });

 // Route to render a view (assuming 'views' folder with 'index.
 app.set('view engine', 'ejs');
 app.get('/render', (req, res) => {
 res.render('index', { title: 'Express Example' });
});

// Route to set response headers
 app.get('/headers', (req, res) => {
 res.set('Content-Type', 'text/plain');
 res.send('Response with custom headers');
 });

 // Start the server
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});