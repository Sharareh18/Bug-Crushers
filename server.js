// imports required libraries & modules
const passport = require('passport'); // Passport for authentication
const User = require('./models/User'); // User model
const path = require('path'); // 'path' module for file path handling
const express = require('express'); // Express
const session = require('express-session'); // Express Session
const exphbs = require('express-handlebars'); // Express Handlebars
const routes = require('./controllers'); // route definitions
const helpers = require('./utils/helpers'); // helper functions
const sequelize = require('./config/connection'); // Sequelize ORM for Node.js
// creates a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// creates an instance of Express
const app = express();
// defines the port number for the web server
const PORT = process.env.PORT || 3001;
// creates a Handlebars instance with helper functions
const hbs = exphbs.create({ helpers });
// configures & links a session object with the Sequelize store
const sess = {
  secret: 'Super secret secret', // secret key for securing session data
  cookie: {}, // cookie settings for sessions
  resave: false, // prevents re-saving unmodified sessions
  saveUninitialized: true, // saves new, unitialized sessions
  store: new SequelizeStore({ db: sequelize }) // connects the session store to the Sequelize database
};
// adds Passport for user authentication & session management as Express.js middleware
app.use(passport.initialize());
app.use(passport.session());
// uses the session configuration as Express.js middleware
app.use(session(sess));
// sets Handlebars as the view engine for rendering dynamic web pages
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// parses JSON & URL-encoded data in incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static files (e.g., stylesheets, client-side scripts) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// sets up the application to use the defined routes for handling web requests
app.use(routes);
// synchronizes the Sequelize database with the defined models
sequelize.sync({ force: false }).then(() => {
  // starts the server, and listens on the specified port
  app.listen(PORT, () => console.log('Server is now listening...'));
});
// serializes the user object to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// deserializes the user object from the stored session data
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(() => {
      done(err, null);
    });
});