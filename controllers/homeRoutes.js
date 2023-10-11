const router = require('express').Router(); // imports the router from the Express library
const { User } = require('../models'); // imports the User modelk for working witu user data
const withAuth = require('../utils/auth'); // imports the 'withAuth' middleware for authentication

// prevents non-logged-in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // retrieves the user data from the database, excluding the 'password' field
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']], // orders the results by the 'name' field in ascending order
    });

    // maps user data to plain JavaScript objects for easier rendering
    const users = userData.map((project) => project.get({ plain: true }));

    // renders the 'homepage' template, passing user data and the 'logged_in' flag
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in, // passes the 'logged_in' flag to the template
    });
  } catch (err) {
    res.status(500).json(err); // handles errors & sends a status code 500 (Internal Server Error)
  }
});

router.get('/login', (req, res) => {
  // if a user session exists (i.e., the user is already logged in), redirects to the homepage
  if (req.session.logged_in) {
    res.redirect('/'); // redirects to the homepage
    return;
  }

  res.render('login'); // renders the 'login' template for users who are not logged in
});

module.exports = router; // exports the router to be used by other parts of the application
