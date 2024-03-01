const errorHtml = require('../utils/errorHtml');

const getServerError = (req, res) => {
    let html = errorHtml
    res.send(html)
};

const getUserError = (req, res) => {
    let html = errorHtml
    res.send(html)
};

module.exports = {
    getServerError,
    getUserError
}
