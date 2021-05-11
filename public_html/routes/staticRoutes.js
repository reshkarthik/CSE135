const express = require('express');
const mongoose = require('mongoose');
const Static = mongoose.model('Static');

const router = express.Router();



router.get('/static', async (req, res) => {
    try {
        res.json({ msg: "hello" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs' });
    }
});

router.get('/static/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

router.post('/static', async (req, res) => {
    try {
        console.log("came here");
        const agent = req.get('user-agent');
        const lang = req.get('accept-language');
        const cookies = req.get('X-Accept-Cookies');
        const images = req.get('X-Accept-Images');
        const css = req.get('X-Accept-CSS');
        console.log(css);
        const screen = req.get('X-Screen-Dim');
        const window = req.get('X-Window-Dim');
        const conn = req.get('Connection');

        // const newUser = new Static({
        //     userAgentString: agent,
        //     userLang: lang,
        //     cookies: cookies,
        //     javaScript: true,
        //     images: true,
        //     CSS: true,
        //     screenDim: screen,
        //     windowDim: window,
        //     networkConn: conn,
        // });
        // await newUser.save();
        res.json({ msg: "has been posted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot post to static' });
    }
});

router.delete('/static/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

router.put('/static/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

module.exports = router;
