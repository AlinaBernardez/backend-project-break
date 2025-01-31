const jwt = require('jsonwebtoken');
const hashedSecret = require('../encrypt/hash');

function generateToken(user) {
    return jwt.sign({ user: user.email }, hashedSecret, { expiresIn: '7h' });
};

function verifyToken(req, res, next) {
    const token = req.session.token
    if (!token) {
        res.redirect('/login')
    } else {
        jwt.verify(token, hashedSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token!' })
        }
        req.user = decoded.user
        next()
        })
    }
};

module.exports = { 
    generateToken,
    verifyToken
}