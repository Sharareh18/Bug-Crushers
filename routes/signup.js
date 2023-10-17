const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Add a POST route for user registration
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Validate input on the server side
    const errors = [];
    if (!username) {
      errors.push('Username is required.');
    }
    if (!email) {
      errors.push('Email is required.');
    }
    if (!password) {
      errors.push('Password is required.');
    }
    if (password !== confirmPassword) {
      errors.push('Passwords do not match.');
    }

    if (errors.length > 0) {
      return res.render('signup', { errors, username, email });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.render('signup', { errors: ['Email is already registered.'], username });
    }

    // Create a new user
    await User.create({ username, email, password });

    // Redirect to a success page or login page
    res.redirect('/');

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
