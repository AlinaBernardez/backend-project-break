const getErrorHtml = require('../utils/errorHtml');
const errorHtml = require('../utils/errorHtml');

const getServerError = (req, res) => {
    console.log(req.body)
    const errHtml = getErrorHtml()
    res.status(500).send(errHtml)
};

const getUserError = (req, res) => {
    let html = errorHtml
    res.send(html)
};

module.exports = {
    getServerError,
    getUserError
}
