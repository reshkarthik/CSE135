const express = require('express');
const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
const fs = require('fs');


const router = express.Router();
router.use(express.json());

router.get('/activity', async (req, res) => {
    try {
        res.json({
            allActiivities: await Activity.find({})
        });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view activity logs' });
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
        fs.writeFileSync('activityID.txt', newUser._id);
        res.json({ id: newUser._id });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot post to activity' });
    }
});

router.get('/activity/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const user = await Activity.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ user: user });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot view activity logs for the given id' });
    }
});

router.delete('/activity/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const user = await Activity.findByIdAndDelete(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        res.json({ msg: req.params.id + " has been deleted" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot delete activity logs for the given id' });
    }
});

router.put('/activity/:id', async (req, res) => {
    try {
        var id = ""
        if (!req.params || req.params.id === '0') {
            id = fs.readFileSync('activityID.txt', 'utf8');
        }
        else {
            id = req.params.id;
        }
        const user = await Activity.findById(id);
        if (user === undefined || user === null) {
            res.json({ msg: id + " does not exist" });
            return;
        }
        const { click, keydown, scrollVal, inactive, cursorMove } = req.body;
        if (click !== undefined) {
            user.clickPos.push([click[1], click[2]]);
            if (click[0] === 0) {
                user.$set({ "clickType.left": user.clickType.left + 1 })
            }
            else {
                user.$set({ "clickType.right": user.clickType.right + 1 })
            }
        }
        if (keydown !== undefined) {
            user.keypresses.push(keydown);
        }
        if (scrollVal !== undefined) {
            user.scrolling.push(scrollVal);
        }
        if (inactive !== undefined) {
            user.idleTime.push(inactive);
        }
        if (cursorMove !== undefined) {
            user.cursorPositions.push(cursorMove);
        }
        user.save();
        res.json({ msg: id + " has been updated" });
    } catch (e) {
        console.log(e);
        res.send({ message: 'Error cannot edit activity logs for the given id' });
    }
});


module.exports = router;
