const express = require('express');
const mongoose = require('mongoose');
const Performance = mongoose.model('Performance');

const router = express.Router();
router.use(express.json());


router.get('/performance', async (req, res) => {
    try {
        res.json({ allPerformance: await Performance.find({}) });
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
        var id = req.params.id;
        const user = await Performance.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ user: user });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view performance logs for the given id' });
    }
});


router.delete('/performance/:id', async (req, res) => {
    try {
        const user = await Performance.findByIdAndDelete(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ msg: req.params.id + " has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot delete performance logs for the given id' });
    }
});

router.put('/performance/:id', async (req, res) => {
    try {
        const user = await Performance.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        const { startLoad, endLoad, loadTime } = req.body;
        if (startLoad !== undefined) {
            user.$set({ startLoad: startLoad });
        }
        if (endLoad !== undefined) {
            user.$set({ endLoad: endLoad });
        }
        if (loadTime !== undefined) {
            user.$set({ loadTime: loadTime });
        }
        res.json({ msg: req.params.id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot edit performance logs for the given id' });
    }
});

module.exports = router;
