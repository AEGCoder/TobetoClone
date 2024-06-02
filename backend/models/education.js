const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    img:{
        type: String,
        required: true,
    },
    
}, { timestamps: true });


const Education = mongoose.model('Education', educationSchema);
module.exports = Education;