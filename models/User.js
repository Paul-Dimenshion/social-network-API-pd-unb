/* This line imports the Schema and model objects from the mongoose package, and the moment package. 
Schema is used to define the structure of documents stored in the database, 
and model is used to create and manage database collections based on a schema.*/
const { Schema, model } = require('mongoose');
const moment = require('moment');

/* This block of code defines a Mongoose schema called UserSchema, which specifies the structure of documents in the users collection. 
The schema has four fields: username, email, thoughts, and friends. The username and email fields are required and must be unique, 
while thoughts and friends are arrays of references to other documents in the database. 
The toJSON option is set to include virtual properties when the document is converted to JSON.*/
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

/* This line defines a virtual property called friendCount on the UserSchema. 
The get function returns the length of the friends array, which represents the number of friends a user has.*/
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

/* This line creates a Mongoose model called User using the UserSchema that was defined earlier. 
The model represents a collection of documents in the database. */
const User = model('User', UserSchema);

/* This line exports the User model so that it can be used in other parts of the application. 
The User model can be required in other files using the require function. */
module.exports = User;