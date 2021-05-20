const express = require('express');
const mongoose = require('mongoose');

const mongoUri =
    'mongodb+srv://cse135:its135@135.uyiq0.mongodb.net/135Database'
const port = 3001
const app = express();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.redirect('login');
}

app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: __dirname });
});

app.post('/login', passport.authenticate('local', { successRedirect: 'home', failureRedirect: 'login' }));

app.get('/logout', function (req, res) {
    req.logout();
    req.redirect('login');
})

app.get('/home', ensureAuthenticated, function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/reports', ensureAuthenticated, function (req, res) {
    res.sendFile('reports.html', { root: __dirname });
});

app.listen(port, () => {
    console.log('Listening on port 3001');
});