const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/activity', async (req, res) => {
    try {
        res.json({ msg: "hello" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs' });
    }
});

router.post('/activity', async (req, res) => {
    try {
        console.log(req.params)
        res.json({ msg: "has been posted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot post to static' });
    }
});

router.get('/activity/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

router.delete('/activity/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

router.put('/activity/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

module.exports = router;
