const router = require('express').Router(); // imports the Express.js router module
const { User, UserProfile } = require('../../models'); // imports the User model for working with user data


// POST route for user registration
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //destructuring with variable names on left that match property names of object on right

    // Validate input on the server side
    const errors = [];
    if (!username) {
      errors.push('Username is required.');
      console.log("1");
    }
    if (!email) {
      errors.push('Email is required.');
      console.log("2");
    }
    if (!password) {
      errors.push('Password is required.');
      console.log("3");
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log("4");
      errors.push('Email is already registered');
      //return res.render('signup', { errors: ['Email is already registered.'], username });
    }

    if (errors.length > 0) {
      //return res.render('signup', { errors, username, email });
      console.log("FAILED USER CREATION");
    }
    else {
      let newUser = req.body;
      newUser = await User.create(newUser);
      let newProfile = await UserProfile.create({
        full_name: "",
        bio: "", 
        profile_picture: "", 
        step_count: 0,
        user_background_color: "orangered",
      });
      await newUser.setUserProfile(newProfile);
      res.json({user: newUser})
    }
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

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
    console.log(userData.password)
    // checks if the provided password matches the stored password for the user
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    //returning false even when correct

    // if the password is not valid
    if (!validPassword) {
      res
        .status(400) // responds with status code 400 (Bad Request)
        .json({ message: 'Incorrect email or password, please try again' });
      return; // exits function
    }

    console.log("CORRECT");

    // saves user information in a session to indicate the user is now logged in
    await req.session.save(() => {
      req.session.user_id = userData.id; // stores the user's ID in the session
      req.session.logged_in = true; // sets the 'logged_in' property to true
      console.log(req.session.logged_in);
      
      // responds with the user's data and a success message
      res.json({ user: { id: userData.id, email: userData.email }, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err); // responds with status code 400 (Bad Request) & an error if one occurs
  }
});

// route for user logout
router.get('/logout', (req, res) => {
  // checks if the user is currently logged in (as indicated by 'logged_in' property in the session)
  if (req.session.logged_in) {
    console.log("AT ROUTE");
    // if logged in, destroys the session to log the user out
    req.session.destroy((err) => {
      if (err) {
        console.log("shouldn't be here");
        console.log (err);
        res.status(500).json({error: "error occured"})
      }
      else {
        console.log("session destroyed");
        //res.status("Successfully logged out.").end(); 
        res.json({message: "Successful logout!"})
        console.log("made it here?")
      }
    });
  } else { 
    console.log("really shouldn't be here");
    //if the logout button is visible when the user is not logged in, that is an error in server
    res.status(500).end();
  }
});

module.exports = router; // exports the router with defined routes for use in other parts of the app
