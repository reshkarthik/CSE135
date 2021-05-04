const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/performance', async (req, res) => {
    try {
        res.json({ msg: "hello" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs' });
    }
});

router.post('/performance', async (req, res) => {
    try {
        console.log(req.params)
        res.json({ msg: "has been posted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot post to static' });
    }
});

router.get('/performance/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});


router.delete('/performance/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

router.put('/performance/:id', async (req, res) => {
    try {
        res.json({ msg: req.params.id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});

module.exports = router;
