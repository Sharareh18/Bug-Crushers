const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', (req, res) => {
  res.render('layouts/main');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || password !== confirmPassword) {
    return res.render('signup', { errors: ['Validation error message'] });
  }

  try {
    const user = await User.create({ username, email, password });
    res.redirect('/profile');
  } catch (error) {
    console.error(error);
    res.render('signup', { errors: ['Database error message'] });
  }
});

module.exports = router;
