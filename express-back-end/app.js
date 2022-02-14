const express = require('express');
const cors = require('cors');

const itemsRouter = require('./routes/items');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', itemsRouter);


module.exports = app;
