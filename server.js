const passport = require('passport');
const User = require('./models/User');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

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
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// uses session middleware before initializing Passport
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
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

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server is now listening...'));
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});
