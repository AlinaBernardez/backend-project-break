const info = require('./info');
const components = require('./components');
const products = require('./products');

module.exports =  {
    ...info,
    ...components,
    ...products
}