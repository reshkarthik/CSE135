const mongoose = require('mongoose');

const { Schema } = mongoose;

const performanceSchema = new mongoose.Schema({
    user: {
        type: String,
        default: '',
    },
    startLoad: {
        type: Number,
        default: 0,
    },
    endLoad: {
        type: Number,
        default: 0,
    },
    loadTime: {
        type: Number,
        default: 0,
    },
    page: {
        type: String,
        default: '',
    },
    browser: {
        type: String,
        default: '',
    },

});

mongoose.model('Performance', performanceSchema);
