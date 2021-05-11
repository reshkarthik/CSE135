const mongoose = require('mongoose');

const { Schema } = mongoose;

const staticSchema = new mongoose.Schema({
    userAgentString: {
        type: String,
        default: '',
    },
    userLang: {
        type: String,
        default: '',
    },
    cookies: {
        type: Boolean,
        default: false,
    },
    javaScript: {
        type: Boolean,
        default: false,
    },
    images: {
        type: Boolean,
        default: false,
    },
    CSS: {
        type: Boolean,
        default: false,
    },
    screenDim: {
        type: {},
        default: { width: 0, height: 0 },
    },
    windowDim: {
        type: {},
        default: { width: 0, height: 0 },
    },
    networkConn: {
        type: String,
        default: '',
    },

});

mongoose.model('Static', staticSchema);
