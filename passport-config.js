const passport = require('passport'); // imports the Passport library for user authentication
const LocalStrategy = require('passport-local').Strategy; // imports the Local Strategy for local (username & password) authentication
const { User } = require('../models'); // imports the User model for working with user data
// configures Passport to use the Local Strategy
passport.use(new LocalStrategy(
    // defines the options for the Local Strategy
    {
        usernameField: 'email', // specifies that the 'email' field will be used as the username
        passwordField: 'password', // specifies that the 'password' field will be used as the password
    },
    // defines a callback function for handling user authentication
    async (email, password, done) => {
        try {
            // finds a user with the provided email in the database
            const user = await User.findOne({ where: { email } });
            // if no user is found with the provided email,
            if (!user) {
                return done(null, false, { message: 'Incorrect email or password'});
            }
            // checks if the provided password matches the stored password for the user
            const isValidPassword = await user.checkPassword(password);
            // if the password is not valid,
            if (!isValidPassword) {
                return done(null, false, { message: 'Incorrect email or password'});
            }
            // if the email & password are valid, return the user data
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
