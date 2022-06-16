const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema({
    // thoughtSchema includes thoughtText, createdAt, username, reactions
    thoughtText: {
        // string, required, Must be between 1 and 280 characters
        type: Strings,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        // Date, Set default value to the current timestamp, Use a getter method to format the timestamp on query
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        

    },
    username: {
        // String, Required
        type: String,
        required: "username is required!"
    },
    reactions: {
        // Array of nested documents created with the reactionSchema
        reactions: [ReactionSchema]
    },
    
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;