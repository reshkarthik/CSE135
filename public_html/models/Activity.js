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
    keyboard: {
        type: {},
        default: {}
    },
    idleTime: {
        type: {},
        default: {
            ended: 0,
            time: 0
        }
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
