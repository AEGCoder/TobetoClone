const router = require('express').Router();
const User = require('../models/user');
const mongoose = require('mongoose');

const mongoId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};




router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.json({message: error});
    }
});


router.delete('/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const deleteUser = await User.findOneAndDelete({email})
        if (!deleteUser) {
          res.status(404).json({message: 'User not found'});
        }
          res.status(200).json(deleteUser);
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;