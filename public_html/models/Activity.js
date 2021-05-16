const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new mongoose.Schema({
    user: {
        type: String,
        default: '',
    },
    cursorPositions: {
        type: [],
        default: [],
    },
    clickPos: {
        type: [],
        default: []
    },
    clickType: {
        type: {},
        default: { "left": 0, "right": 0 }
    },
    scrolling: {
        type: [],
        default: [],
    },
    keypresses: {
        type: [],
        default: []
    },
    idleTime: {
        type: [],
        default: []
    },
    timeEntered: {
        type: Number,
        default: 0
    },
    timeExit: {
        type: Number,
        default: 0
    },
    page: {
        type: String,
        default: ''
    }


});

mongoose.model('Activity', activitySchema);
