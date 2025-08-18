const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!^&*]).{8,}$/;

router.post('/register', async (req, res) => {
 const { username, password, email, age, address } = req.body;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Weak password' });
  }

  try {
    const exists = await User.findOne({ username });
    if (exists) return res.status(409).json({ error: 'User exists' });

    const hashed = await bcrypt.hash(password, 10);
    await new User({  username, password: hashed, email, age, address}).save();

    res.json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'User not found' });

   if (user.isLocked && user.lockUntil) {
    const now = new Date();
    if (now < user.lockUntil) {
      return res.status(403).json({ error: 'Account locked. Try again later.' });
    } else {
      user.isLocked = false;
      user.failedAttempts = 0;
      user.lockUntil = null;
      await user.save();
    }
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    user.failedAttempts++;
    if (user.failedAttempts >= 3) {
      user.isLocked = true;
      user.lockUntil = new Date(Date.now() + 60 * 60 * 1000); 
    }
    await user.save();
    return res.status(401).json({ error: 'Incorrect password' });
  }
  user.failedAttempts = 0;
  user.isLocked = false;
  user.lockUntil = null;
  await user.save();

  res.json({ message: 'Login successful' });
});

module.exports = router;
