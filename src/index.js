const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const dbConnect = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
});