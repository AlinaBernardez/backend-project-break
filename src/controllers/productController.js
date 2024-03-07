const Product = require('../models/Product');
const fs = require('node:fs');
const path = require('path');
const getProductCards = require('../utils/getProductCard');
const getProductCardsAdmin = require('../utils/getProductCardsAdmin');
const getBaseHtml = require('../utils/getBaseHtml');
const { getNavBar, getNavBarAdmin } = require('../utils/getNavBar');
const { getProductForm, getImageForm } = require('../utils/getForms');
const getProductDetail = require('../utils/getProductDetail');
const { deleteUploaded } = require('../config/multer');

const showProducts = async(req, res) => {
    let html
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        if(!req.session.token) {
            const response = getProductCards(allProducts)
            html = getBaseHtml() + getNavBar() + `<div class='cardContainer'>${response}</div>`
        }
        else {
            const response = getProductCardsAdmin(allProducts)
            html = getBaseHtml() + getNavBarAdmin() + `<div class='cardContainer'>${response}</div>`
        }
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!'})
    }
};

const showFilteredProducts = async(req, res) => {
    let html
    try {
        const filter = req.params.category
        const filteredProducts = await Product.find({category: filter})
        if(!req.session.token) {
            const response = getProductCards(filteredProducts)
            html = getBaseHtml() + getNavBar() + `<div class='cardContainer'>${response}</div>`
        } 
        else {
            const response = getProductCardsAdmin(filteredProducts)
            html = getBaseHtml() + getNavBarAdmin() + `<div class='cardContainer'>${response}</div>`
        }
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showProductById = async(req, res) => {
    let html
    try {
        const thisProduct = await Product.findById(req.params.productId)
        if(!thisProduct) res.status(400).send({message: 'Could not find this product'})
        if(!req.session.token) {
            html = getBaseHtml() + getNavBar() + `<div class='detailContainer'>${getProductDetail(thisProduct, false)}</div>`
        }
        else {
            html = getBaseHtml() + getNavBarAdmin() + `<div class='detailContainer'>${getProductDetail(thisProduct, true)}</div>`
        }
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showNewProduct = async(req, res) => {
    const form = getProductForm('new')
    const newProductForm = getBaseHtml() + getNavBarAdmin() + form
    res.send(newProductForm)
};

const showNewImage = (req, res) => {
    const addImageForm = getBaseHtml() + getNavBarAdmin() + getImageForm(req.params.productId)
    return res.send(addImageForm)
};

const createProduct = async(req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        const newId = newProduct._id
        return res.redirect(`/dashboard/${newId}/addImage`)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!'})
    }
};

const uploadImage = async(req, res) => {
    const id = req.params.productId
    const imgPath = path.join(__dirname, '/../../uploads', req.file.filename)
    try {
        const updatedProduct = await Product.updateOne({_id: id}, {image: imgPath})
        res.redirect(`/dashboard`)
    } catch(error) {
        res.status(500).send(error.message)
    }
};

const showEditProduct = async(req, res) => {
    let editId = req.params.productId
    const toEdit = await Product.findById(editId)
    const editProductForm = getBaseHtml() + getNavBarAdmin() + getProductForm('edit', toEdit)
    return res.send(editProductForm)
};

const updateProduct = async(req, res) => {
    const { name, description, category, size, price } = req.body
    if(!name || !description || !category || !size || !price) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body)
        res.redirect('/dashboard')
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const deleteProduct = async(req, res) => {
    let id = req.params.productId
    let imgPath = path.join(__dirname, '/../../uploads', `image-${id}`)
    try {
        await Product.findByIdAndDelete(id)
        if(fs.existsSync(imgPath)) deleteUploaded(imgPath)
        return res.redirect('/dashboard')
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

module.exports = {
    showProducts,
    showFilteredProducts,
    showProductById,
    showNewProduct,
    showNewImage,
    uploadImage,
    createProduct, 
    showEditProduct,
    updateProduct,
    deleteProduct
};