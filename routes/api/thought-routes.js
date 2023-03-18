const router = require('express').Router(); // creates a new instance of the Express.js Router middleware.

// imports the thought controller's functions for handling each request.
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

/*  sets up the route for getting all thoughts and creating a new thought. 
This route is set up using the .route() method of the router object and chaining the .get() and .post() methods. */
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

/* sets up the route for getting a single thought by ID, updating a thought, and deleting a thought. 
This route is set up using the .route() method of the router object and chaining the .get(), .put(), and .delete() methods. */
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

/*  sets up the route for adding a reaction to a thought. 
This route is set up using the .route() method of the router object and chaining the .post() method. */
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

/* sets up the route for deleting a reaction from a thought. 
This route is set up using the .route() method of the router object and chaining the .delete() method. */
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router; // exports the router middleware for use in the main server file.