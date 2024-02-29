const express = require('express');
const { showProducts, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, showProductsAdmin, deleteProduct, showNewImage, uploadImage } = require('../controllers/productController');
const productRoutes = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../config/multer');

//User routes
productRoutes.get('/products', showProducts);

productRoutes.get('/products/:productId', showProductById);

//Admin routes
productRoutes.get('/dashboard', verifyToken, showProductsAdmin);

productRoutes.get('/dashboard/new', showNewProduct);

productRoutes.post('/dashboard', createProduct);

productRoutes.get('/dashboard/:productId/addImage', showNewImage);

productRoutes.post('/dashboard/:productId/newImage', upload, uploadImage);

productRoutes.get('/dashboard/:productId', showProductById);

productRoutes.get('/dashboard/:productId/edit', showEditProduct);

productRoutes.post('/dashboard/:productId', updateProduct);

productRoutes.post('/dashboard/:productId/delete', deleteProduct);

module.exports = productRoutes;