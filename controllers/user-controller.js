const { User } = require('../models');

const userController = {
    // api/users get all users
    getAllUser(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: ('-__v')
        })
    // allows to remove __v from visuals
        .select('-__v')
        .sort({_id: -1}) // descending order
        .then(dbUserData => res.json(dbUserData))
        // catch error
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // get single user by id
    getUserById({params}, res) {

    },

    // add user
    addUser({ body } , res) {

    },

    // Update user by id
    updateUser({params, body}, res) {

    },

// Delete user and users associated thoughts
    deleteUser({params}, res) {

    }

 // add friend
    addFriend({params}, res) {

    },

 // delete friend
    deleteFriend({params}, res) {
    }

}




module.exports = userController