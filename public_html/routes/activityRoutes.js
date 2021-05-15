const express = require('express');
const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
const fs = require('fs');


const router = express.Router();
router.use(express.json());

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
        const { sessID, timeEntered, page } = req.body;
        const newUser = new Activity({
            user: sessID,
            timeEntered: timeEntered,
            page: page,
        });
        await newUser.save();
        fs.writeFileSync('id.txt', newUser._id);
        res.json({ id: newUser._id });
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
        var id = ""
        if (!req.params || req.params.id === '0') {
            id = fs.readFileSync('id.txt', 'utf8');
        }
        else {
            id = req.params.id;
        }
        const user = await Activity.findById(id);
        const { click, keydown, scrollVal, inactive } = req.body;
        if (click !== undefined) {
            user.clicks.positions.push([click[1], click[2]]);
            user.save();
            console.log(user.clicks.positions);
        }

        res.json({ msg: id + "has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view static logs for the given id' });
    }
});


module.exports = router;
