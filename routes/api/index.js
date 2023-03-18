const router = require('express').Router(); // creates a new instance of the Express.js Router middleware.
const userRoutes = require('./user-routes'); // imports the user routes from the user-routes.js file.
const thoughtRoutes = require('./thought-routes'); // imports the thought routes from the thought-routes.js file.

router.use('/users', userRoutes); // sets up a prefix of /users for all of the user routes defined in the user-routes.js file.
router.use('/thoughts', thoughtRoutes); // sets up a prefix of /thoughts for all of the thought routes defined in the thought-routes.js file.

module.exports = router; // exports the router middleware for use in the main server file.