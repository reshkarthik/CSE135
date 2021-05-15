const express = require('express');
const mongoose = require('mongoose');
const Performance = mongoose.model('Performance');

const router = express.Router();
router.use(express.json());


router.get('/performance', async (req, res) => {
    try {
        res.json({ msg: "hello" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view performance logs' });
    }
});

router.post('/performance', async (req, res) => {
    try {
        const { startTime, endTime, loadTime, sessID } = req.body;
        const newUser = new Performance({
            user: sessID,
            startLoad: startTime,
            endLoad: endTime,
            loadTime: loadTime,
        });
        await newUser.save();
        res.json({ id: newUser._id });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot post to performance' });
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
