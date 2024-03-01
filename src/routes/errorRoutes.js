const express = require('express');
const errRoutes = express.Router();
const { getServerError } = require('../controllers/errorControllers');
const errorHtml = require('../utils/errorHtml');

errRoutes.get('/errorServer', getServerError);

module.exports = errRoutes;