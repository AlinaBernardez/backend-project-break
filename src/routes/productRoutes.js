const express = require('express');
const multer = require('multer');
const { showProducts, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, showProductsAdmin, deleteProduct } = require('../controllers/productController');
const productRoutes = express.Router();

//Multer config for image upload
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
let upload = multer({ storage: storage });

//Rutas usuario
productRoutes.get('/products', showProducts);

productRoutes.get('/product/:productId', showProductById);

//Rutas administrador
productRoutes.get('/dashboard', showProductsAdmin);

productRoutes.get('/dashboard/new', showNewProduct);

productRoutes.post('/dashboard', upload.single('image'), createProduct);

productRoutes.get('/dashboard/:productId');

productRoutes.get('/dashboard/:productId/edit', showEditProduct);

productRoutes.post('/dashboard/:productId', updateProduct);

productRoutes.post('/dashboard/:productId/delete', deleteProduct);

module.exports = productRoutes;