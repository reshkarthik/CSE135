const mongoose = require('mongoose');

const { Schema } = mongoose;

const uesrSchema = new mongoose.Schema({
    username: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        unique: true
    },
    email: {
        type: String,
        default: '',
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});

mongoose.model('Static', staticSchema);
