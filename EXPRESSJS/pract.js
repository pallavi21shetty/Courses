// const express = require('express');
// const app = express();
// function checkToken(req, res, next) {
//   const token = req.query.token;
//   if (!token) {
//     return res.status(403).send('Access denied. Token missing.');
//   }
//   next(); 
// app.use(checkToken);

// app.get('/', (req, res) => {
//   res.send('You have access!');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// }
// http://localhost:3000/?token=abc123 →  Access granted
// http://localhost:3000/ →  403 Access denied



// const express = require('express');
// const app = express();
// app.get('/time', (req, res) => {
//   const currentTime = new Date();
//   res.json({ time: currentTime.toISOString() });
// });
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, username: "pallavi", password: "123456" },
  { id: 2, username: "john", password: "abcdef" }
];

// -----------------------
// 1️⃣ LOGIN ROUTE - Generate Token
// -----------------------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Create token
  const token = jwt.sign(
    { id: user.id, username: user.username }, 
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // Token expires in 1 hour
  );

  res.json({ message: "Login successful", token });
});

// -----------------------
// 2️⃣ MIDDLEWARE - Verify Token
// -----------------------
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(403).json({ error: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token" });
    req.user = user; // Save decoded user info
    next();
  });
}

// -----------------------
// 3️⃣ PROTECTED ROUTE
// -----------------------
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!`, userData: req.user });
});

// -----------------------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
