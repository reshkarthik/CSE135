require('./models/Static');
require('./models/Performance');

const express = require('express');
const mongoose = require('mongoose');
const mongoUri =
    'mongodb+srv://cse135:its135@135.uyiq0.mongodb.net/135Database'
const staticRoutes = require('./routes/staticRoutes.js');
const performanceRoutes = require('./routes/performanceRoutes.js');
const activityRoutes = require('./routes/activityRoutes.js');


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo instance', err);
});


const app = express();
app.use(staticRoutes);
app.use(performanceRoutes);
app.use(activityRoutes);

app.listen(3005, () => {
    console.log('Listening on port 3005');
});