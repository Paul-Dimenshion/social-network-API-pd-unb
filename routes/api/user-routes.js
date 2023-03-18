const router = require('express').Router(); // creates a new instance of the Express.js Router middleware.

//  imports the user controller's functions for handling each request.
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

/* sets up the route for getting all users and creating a new user. 
This route is set up using the .route() method of the router object and chaining the .get() and .post() methods. */
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

/* sets up the route for getting a single user by ID, updating a user, and deleting a user. 
This route is set up using the .route() method of the router object and chaining the .get(), .put(), and .delete() methods.*/
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

/* sets up the route for adding and deleting a friend for a user. 
This route is set up using the .route() method of the router object and chaining the .post() and .delete() methods.*/
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router; // exports the router middleware for use in the main server file.