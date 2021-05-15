const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fs = require('fs');
const Static = mongoose.model('Static');

const router = express.Router();
router.use(bodyparser.json());


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
        const agent = req.get('user-agent');
        const lang = req.get('accept-language');
        const cookies = req.get('X-Accept-Cookies');
        const images = req.get('X-Accept-Images');
        const css = req.get('X-Accept-CSS');
        const js = req.get('X-JS-Enabled');
        const screen = req.get('X-Screen-Dim');
        const window = req.get('X-Window-Dim');
        const conn = req.get('Connection');
        var session = req.get('X-Session-ID');
        if (session === undefined) {
            session = fs.readFileSync('newfile.txt', 'utf8');
        }
        const newUser = new Static({
            user: session,
            userAgentString: agent,
            userLang: lang,
            cookies: cookies,
            javaScript: js,
            images: images,
            CSS: css,
            screenDim: screen,
            windowDim: window,
            networkConn: conn,
        });
        await newUser.save();
        res.json({ id: newUser._id });
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
