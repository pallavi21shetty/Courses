const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Mock Database
let users = [];

// Generate JWT
function generateToken(user) {
  return jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
}

// Middleware to verify JWT from cookies
function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered successfully" });
});

// Login - store JWT in secure cookie
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);

  // Store token in HTTP-only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, // Change to true in production with HTTPS
    sameSite: "strict"
  });

  res.json({ message: "Login successful" });
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}!` });
});

// Logout - clear cookie
app.post("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logged out successfully" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
