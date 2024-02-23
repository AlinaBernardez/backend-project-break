const express = require('express');
const { showProducts, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, showProductsAdmin, deleteProduct } = require('../controllers/productController');
const productRoutes = express.Router();

//Rutas usuario
productRoutes.get('/products', showProducts);

productRoutes.get('/product/:productId', showProductById);

//Rutas administrador
productRoutes.get('/dashboard', showProductsAdmin);

productRoutes.get('/dashboard/new', showNewProduct);

productRoutes.post('/dashboard', createProduct);

productRoutes.get('/dashboard/:productId');

productRoutes.get('/dashboard/:productId/edit', showEditProduct);

productRoutes.post('/dashboard/:productId', updateProduct);

productRoutes.post('/dashboard/:productId/delete', deleteProduct);

module.exports = productRoutes;