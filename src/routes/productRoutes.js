const express = require('express');
const productRoutes = express.Router();
const { showProducts, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, deleteProduct, showNewImage, uploadImage, showFilteredProducts } = require('../controllers/productController');
const { verifyToken } = require('../middleware/authMiddleware');
const { upload } = require('../config/multer');

//User routes
productRoutes.get('/products', showProducts);

productRoutes.get('/products/:category', showFilteredProducts);

productRoutes.get('/products/:productId/detail', showProductById);

//Admin routes
productRoutes.get('/dashboard', verifyToken, showProducts);

productRoutes.get('/dashboard/:category', verifyToken, showFilteredProducts);

productRoutes.get('/addProduct', verifyToken, showNewProduct);

productRoutes.post('/dashboard', verifyToken, createProduct);

productRoutes.get('/dashboard/:productId/addImage', verifyToken, showNewImage);

productRoutes.post('/dashboard/:productId/newImage', upload, uploadImage);

productRoutes.get('/dashboard/:productId/detail', verifyToken, showProductById);

productRoutes.get('/dashboard/:productId/edit', verifyToken, showEditProduct);

productRoutes.post('/dashboard/:productId', updateProduct);

productRoutes.post('/dashboard/:productId/delete', deleteProduct);


module.exports = productRoutes;