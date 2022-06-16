// Import the dependencies 
const { Schema, model } = require('mongoose');
// Use moment.js for timestamps
const moment = require('moment');
const { STRING_UNARY_OPERATORS } = require('@babel/types');

// Create userSchema that has username, email, thoughts and friends
const userSchema = new Schema ({

    username: {
        // string, unique, required, trimmed
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        // Must match a valid email address
        type: String,
        unique: true,
        required: 'Email address is required',
        trim: true,
        //match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    thoughts: [
        // Array of _id values referencing the Thought model
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        // Array of _id values referencing the User model (self-reference)
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
//   Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Export the model
const User = model('User', userSchema);
module.exports = User;




