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
        User.findOne({_id: params.id})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message:'No user found with this id!'})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);

        });

    
    },

    // add user
    addUser({ body }, res) {
        User.create(body) 
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));

    },

    // Update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            {_id: params.id}, 
            body,
            {new: true, runValidators: true}
            ).then(dbUserData => {
                if(!dbUserData) {
                    res.status(404)
                    .json({message: 'No user was found with this id!'});
                    return;
                }
                res.json(dbUserData);
            }).catch(err => res.json(err)
        );
    },

    // Delete user and users associated thoughts
    deleteUser({params}, res) {
        User.findOneAndDelete ({
            _id: params.id
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404)
                .json({ message: 'No user found with this id!'})
                return;
            }
            res.json(dbUserData);

        }).then(dbUserData => {
            User.updateMany(
                {_id: {$in: dbUserData.friends}},
                {$pull: {friends: params.userId}}
            )
        }).then(() => {
            // Bonus delete user's associated thoughts
            Thoughts.deleteMany({
                username: dbUserData.username
            })
        }).then(() => {
            res.json({message: 'Deleted user'});
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // /api/users/:userId/friends/:friendId

    // add friend

    addFriend({params}, res) {
        User.findOneAndUpdate( 
            {_id: params.userId},
            {$push: { friends: params.friendId}},
            { new: true }
        )
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then((dbUserData) => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // delete friend
    deleteFriend({ params }, res) {
        User.findOneAndDelete(
            {_id: params.id},
            {$pull: {friends: params.friendId}},
            {new: true}
        )
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
};

module.exports = userController