const express = require('express');
const mongoose = require('mongoose');
const Goods = require('./models/goods');
require('dotenv').config();
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('style'));
app.use(express.static('script'));
app.use(express.static('img'));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'));

const createPath = page => path.join(__dirname, `${page}.ejs`);

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`listening on port ${process.env.PORT}`);
})

app.get('/', (req, res) => {
    const title = 'Main';
    Goods
        .find()
        .then((goods) => res.render(createPath('shop'), { title, goods }));
})