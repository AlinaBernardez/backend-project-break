const Product = require('../models/Product');
const fs = require('node:fs');
const path = require('path');
const getProductCards = require('../utils/getProductCard')
const getProductCardsAdmin = require('../utils/getProductCardsAdmin')
const baseHtml = require('../utils/baseHtml');
const { getNavBar, getNavBarAdmin } = require('../utils/getNavBar');
const { getProductForm, getImageForm } = require('../utils/getForms');

const showProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        const response = getProductCards(allProducts)
        const html = baseHtml + getNavBar() + response
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showProductsAdmin = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        const response = getProductCardsAdmin(allProducts)
        const html = baseHtml + getNavBarAdmin() + response
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showProductById = async(req, res) => {
    try {
        const thisProduct = await Product.findById(req.params._id)
        if(!thisProduct) res.status(400).send({message: 'Could not find this product'})
        res.status(200).send('Product:', thisProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showNewProduct = (req, res) => {
    const newProductForm = baseHtml + getNavBarAdmin() + getProductForm('new')
    return res.send(newProductForm)
};

const showNewImage = (req, res) => {
    const addImageForm = baseHtml + getNavBarAdmin() + getImageForm(req.params)
    return res.send(addImageForm)
};

const createProduct = async(req, res) => {
    console.log(req.body)
    try {
        const newProduct = await Product.create(req.body)
        const newId = newProduct._id
        console.log('Product created', newId)
        return res.send({redirect: `/dashboard/${newId}/addImage`})
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const uploadImage = async(req, res) => {
    console.log('uploading')
    try {
        const imgPath = path.join(__dirname + '..' + '/uploads' + req.file.filename)
        const prodImage = {
            data: fs.readFileSync(imgPath),
            contentType: 'image/png'
        }
        console.log(prodImage)
        let updated = await Product.findByIdAndUpdate(req.params, prodImage)
        console.log(updated)
        res.redirect('/dashboard')
    } catch(error) {
        res.status(500).send({message: error})
    }
};

const showEditProduct = async(req, res) => {
    const editProductForm = baseHtml + getNavBarAdmin() + getProductForm('edit', req.param._id)
    res.send(editProductForm)
};

const updateProduct = async(req, res) => {
    const { name, description, category, size } = req.body
    if(!name || !description || !category || !size) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params._id, req.body)
        return res.json(updatedProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const deleteProduct = async(req, res) => {
    try {
        await Product.findOneAndDelete({_id: req.params.id})
        res.status(200).send({message: 'Product deleted'})
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

module.exports = {
    showProducts,
    showProductsAdmin,
    showProductById,
    showNewProduct,
    showNewImage,
    uploadImage,
    createProduct, 
    showEditProduct,
    updateProduct,
    deleteProduct
};