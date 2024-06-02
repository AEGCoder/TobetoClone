const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    time:{
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: String,
        trim: true
    }
    
}, { timestamps: true });


const Catalog = mongoose.model('Catalog', catalogSchema);
module.exports = Catalog;