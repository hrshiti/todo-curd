const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,    
        required: true
    },
    discription: {
        type: String,
        required: true    
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });    

    module.exports = {
        Todo: mongoose.model('Todo', todoSchema)
    }