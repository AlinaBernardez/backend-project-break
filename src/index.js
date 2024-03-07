const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/firebase');
const session = require('express-session');
const path = require('path');
const dbConnect = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');
const hashedSecret = require('./encrypt/hash');

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '/../uploads')));
app.use(cors());

app.use(
    session({
        secret: hashedSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use('/', productRoutes);
app.use('/', authRoutes);
app.use('/api', apiRoutes);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
});

module.exports = app;