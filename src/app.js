const express = require('express');
const path = require('path');
const router = require('./routes/roadPiratesRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);

module.exports = app;