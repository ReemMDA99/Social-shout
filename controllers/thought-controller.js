const { User, Thought} = require('../models');

// create api/thoughts
const thoughtController = {
    // get all thoughts
    getAllThoughts(res, req) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select:'-__v'
        })
        .select('-__v')
        .sort({_id: -1})
            .then(dbThoughtData => 
                res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get single thought by _id
    getThoughtById({ params}, res) {
        Thought.findOne({_id: params:id})
        .populate({ path: 'reactions', select: '-__v'})
        .select({'-__v'})
        .sort({_id:-1})
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No thoughts found with that id'});
                return;
            }
            res.json(dbThoughtData);
            
        }).catch(err=> {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    addThought({ params, body}, res) {
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        }).then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'Wrong thought data'});
                return;

            }
            res.json(dbThoughtData);
        }).catch(err=> res.json(err));
    },
    // update thought by id
    // delete thought
    //create reactions
     // Delete a reaction
}
module.exports = thoughtController
