const express = require('express');
const apiRoutes = express.Router();
const { showProducts, showFilteredProducts, showProductById, createProduct, editProduct, deleteProduct } = require('../controllers/apiControllers');

//User routes
apiRoutes.get('/products', showProducts);

apiRoutes.get('/products/:category', showFilteredProducts);

apiRoutes.get('/products/:productId', showProductById);

apiRoutes.post('/products', createProduct);

apiRoutes.put('/products/:productId', editProduct);

apiRoutes.delete('/products/:productId', deleteProduct);

module.exports = apiRoutes;