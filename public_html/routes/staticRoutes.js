const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fs = require('fs');
const Static = mongoose.model('Static');

const router = express.Router();
router.use(bodyparser.json());


router.get('/static', async (req, res) => {
    try {
        res.json({ allStatic: await Static.find({}) });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs' });
    }
});

router.get('/static/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const user = await Static.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ user: user });
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
        const user = await Static.findByIdAndDelete(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ msg: req.params.id + " has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot delete static logs for the given id' });
    }
});

router.put('/static/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Activity.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        const { userAgentString, userLang, cookies, javaScript,
            images, CSS, screenDim, windowDim, networkConn } = req.body;

        if (userAgentString !== undefined) {
            user.$set({ userAgentString: userAgentString });
        }
        if (userLang !== undefined) {
            user.$set({ userLang: userLang });
        }
        if (cookies !== undefined) {
            user.$set({ cookies: cookies });
        }
        if (javaScript !== undefined) {
            user.$set({ javaScript: javaScript });
        }
        if (images !== undefined) {
            user.$set({ javaScript: javaScript });
        }
        if (CSS !== undefined) {
            user.$set({ CSS: CSS });
        }
        if (screenDim !== undefined) {
            user.$set({ screenDim: screenDim });
        }
        if (windowDim !== undefined) {
            user.$set({ windowDim: windowDim });
        }
        if (networkConn !== undefined) {
            user.$set({ networkConn: networkConn });
        }
        res.json({ msg: req.params.id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

module.exports = router;
