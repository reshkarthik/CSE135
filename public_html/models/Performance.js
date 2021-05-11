const mongoose = require('mongoose');

const { Schema } = mongoose;

const performanceSchema = new mongoose.Schema({
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

});

mongoose.model('Performance', performanceSchema);
