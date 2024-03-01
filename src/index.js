const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const session = require('express-session');
const path = require('path');
const dbConnect = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
require('./config/firebase')

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '/../uploads')));
app.use(cors());

app.use(
    session({
        secret: process.env.MY_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use('/', productRoutes);
app.use('/', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
});