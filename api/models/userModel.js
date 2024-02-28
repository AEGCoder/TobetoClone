const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;