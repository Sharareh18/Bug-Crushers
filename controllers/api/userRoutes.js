const router = require('express').Router(); // imports the Express.js router module
const { User } = require('../../models'); // imports the User model for working with user data

// route for user login
router.post('/login', async (req, res) => {
  try {
    // attempts to find a user in the database with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // checks if no user was found with the provided email
    if (!userData) {
      res
        .status(400) // responds with a status code 400 (Bad Request)
        .json({ message: 'Incorrect email or password, please try again' });
      return; // exits function
    }

    // checks if the provided password matches the stored password for the user
    const validPassword = await userData.checkPassword(req.body.password);

    // if the password is not valid
    if (!validPassword) {
      res
        .status(400) // responds with status code 400 (Bad Request)
        .json({ message: 'Incorrect email or password, please try again' });
      return; // exits function
    }

    // saves user information in a session to indicate the user is now logged in
    req.session.save(() => {
      req.session.user_id = userData.id; // stores the user's ID in the session
      req.session.logged_in = true; // sets the 'logged_in' property to true
      
      // responds with the user's data and a success message
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err); // responds with status code 400 (Bad Request) & an error if one occurs
  }
});

// route for user logout
router.post('/logout', (req, res) => {
  // checks if the user is currently logged in (as indicated by 'logged_in' property in the session)
  if (req.session.logged_in) {
    // if logged in, destroys the session to log the user out
    req.session.destroy(() => {
      res.status(204).end(); // responds with status code 204 (No Content)
    });
  } else {
    // if not logged in, respond with status code 404 (Not Found)
    res.status(404).end();
  }
});

module.exports = router; // exports the router with defined routes for use in other parts of the app
