const express = require('express');
const mongoose = require('mongoose');

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
        console.log(req.params)
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
