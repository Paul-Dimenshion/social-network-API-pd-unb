// Here's a quick breakdown of the code:

const express = require('express'); // imports the Express.js library.
const mongoose = require('mongoose'); // imports the Mongoose library for interacting with MongoDB.


const app = express(); // creates an instance of the Express application.
const PORT = process.env.PORT || 3003; // sets the port number to either the value of the PORT environment variable or 3003 if it's not defined.

app.use(express.json()); // sets up the middleware to parse JSON requests.
app.use(express.urlencoded({ extended: true })); // sets up the middleware to parse URL-encoded requests.
app.use(express.static('public')); //  sets up the middleware to serve static files from the public directory.

app.use(require('./routes')); // sets up the middleware to handle routing using the routes.js file.

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-API', {}); //  connects to the MongoDB database using the connection string stored in the MONGODB_URI environment variable, or the default connection string if the environment variable is not defined.

// Use this to log mongo queries being executed!
mongoose.set('debug', true); // sets up Mongoose to log MongoDB queries being executed.


app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`)); // starts the server and listens for requests on the specified port number, and logs a message to the console once the server is up and running.