const router = require('express').Router(); // creates a new instance of the Express.js Router middleware.
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');

// Add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes); 

/* sets up a middleware to handle any request that doesn't match the routes defined earlier. 
This middleware returns a 404 status code and an HTML message indicating that the requested resource was not found. */
router.use((req, res) => {
  res.status(404).send('<h1> 404 Error!</h1>');
});

// exports the router middleware for use in the main server file
module.exports = router;