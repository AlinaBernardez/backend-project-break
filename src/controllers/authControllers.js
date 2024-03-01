const session = require('express-session')
const { generateToken } = require('../middleware/authMiddleware');
const { getAuthForm } = require('../utils/getForms');
const baseHtml = require('../utils/baseHtml');
const firebase = require('firebase/compat/app');
const { getNavBar } = require('../utils/getNavBar');
require('firebase/compat/auth');

const registerForm = (req, res) => {
    const html = baseHtml + getNavBar() + getAuthForm('register')
    res.send(html)
};

const register = async(req, res) => {
    const { userName, email, password } = req.body;
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user
            const token = generateToken(user)
            req.session.token = token
        })
        .catch((error) => {
            let errorMessage = error.message
            console.log(errorMessage)
            res.send(errorMessage)
        })
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server problem creating user')
    }
};

const loginForm = (req, res) => {
    const html = baseHtml + getNavBar() + getAuthForm('login')
    res.send(html)
};

const login = async(req, res) => {
    const { email, password } = req.body
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            const token = generateToken(user);
            req.session.token = token;
        })
        .catch((error) => {
            let errorMessage = error.message;
            res.send(errorMessage)
        })
        res.redirect('/dashboard')
    } catch (error) {
        res.status(500).send('Server not responding')
    }
};

const logout = (req, res) => {
    firebase.auth().signOut()
    .then(() => {
        req.session.destroy();
        res.redirect('/products');
    }).catch((error) => {
        res.send(error.message)
    });
};


module.exports = {
    registerForm,
    register,
    loginForm,
    login,
    logout
}