const express = require('express');
const bodyParser = require('body-parser');//materi
const jwt = require ('jsonwebtoken');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const sequelize = require('./configs/sequelize');

const Product = require('./models/product');
const User = require('./models/user');

app.use(homeRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})