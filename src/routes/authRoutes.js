const express = require('express');
const { registerForm, register, loginForm, login, logout } = require('../controllers/authControllers');
const authRoutes = express.Router();

authRoutes.get('/register', registerForm);
authRoutes.post('/register', register);

authRoutes.get('/login', loginForm);
authRoutes.post('/login', login);

authRoutes.post('/logout', logout);

module.exports = authRoutes;