// imports required dependencies for routing
const router = require('express').Router();

// imports user-related routes from userRoutes.js
const apiRoutes = require('./api');

// import home-related routes from homeRoutes.js
const homeRoutes = require('./homeRoutes');

// use the user-related routes under '/api/users'
router.use('/', homeRoutes);

// use the home-related routes under the root
router.use('/api', apiRoutes);

// export the configured router to be used in the app
module.exports = router;
