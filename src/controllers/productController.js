const Product = require('../models/Product');
const fs = require('node:fs');
const path = require('path');
const getProductCards = require('../utils/getProductCard')
const getProductCardsAdmin = require('../utils/getProductCardsAdmin')
const baseHtml = require('../utils/baseHtml');
const { getNavBar, getNavBarAdmin } = require('../utils/getNavBar');
const { getProductForm, getImageForm } = require('../utils/getForms');
const getProductDetail = require('../utils/getProductDetail');

const showProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        const response = getProductCards(allProducts)
        const html = baseHtml + getNavBar() + `<div class='cardContainer'>${response}</div>`
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
        const html = baseHtml + getNavBarAdmin() + `<div class='cardContainer'>${response}</div>`
        res.send(html)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showProductById = async(req, res) => {
    if(!req.session.token) {
        try {
            const thisProduct = await Product.findById(req.params.productId)
            if(!thisProduct) res.status(400).send({message: 'Could not find this product'})
            const html = baseHtml + getNavBar() + `<div class='detailContainer'>${getProductDetail(thisProduct, false)}</div>`
            res.send(html)
        }
        catch(error) {
            res.status(500).send({message: 'Something went wrong!', error})
        }
    }
    else {
        try {
            const thisProduct = await Product.findById(req.params.productId)
            if(!thisProduct) res.status(400).send({message: 'Could not find this product'})
            const html = baseHtml + getNavBarAdmin() + `<div class='detailContainer'>${getProductDetail(thisProduct, true)}</div>`
            res.send(html)
        }
        catch(error) {
            res.status(500).send({message: 'Something went wrong!', error})
        }
    }
    
};

const showNewProduct = (req, res) => {
    const newProductForm = baseHtml + getNavBarAdmin() + getProductForm('new')
    return res.send(newProductForm)
};

const showNewImage = (req, res) => {
    const addImageForm = baseHtml + getNavBarAdmin() + getImageForm(req.params.productId)
    return res.send(addImageForm)
};

const createProduct = async(req, res) => {
    console.log(req.body)
    try {
        const newProduct = await Product.create(req.body)
        const newId = newProduct._id
        return res.redirect(`/dashboard/${newId}/addImage`)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

//C:\Users\MSI\Desktop\TheBridge\Ejercicios\BackEnd\backend-project-break\uploads

const uploadImage = async(req, res) => {
    const id = req.params.productId
    console.log(id)
    const imgPath = path.join(__dirname, '/../../uploads', req.file.filename)
    try {
        console.log('thisPath:', imgPath)
        const prodImage = {
            data: fs.readFileSync(imgPath),
            contentType: 'image/png'
        }
        let updated = await Product.findByIdAndUpdate(id, {image: prodImage}, {new: true})
        console.log(updated)
        return res.redirect(`/dashboard/${id}`)
    } catch(error) {
        res.status(500).send({message: error})
    }
};

const showEditProduct = async(req, res) => {
    let editId = req.params.productId
    const toEdit = await Product.findById(editId)
    const editProductForm = baseHtml + getNavBarAdmin() + getProductForm('edit', editId, toEdit)
    res.send(editProductForm)
};

const updateProduct = async(req, res) => {
    console.log(req.body)
    const { name, description, category, size, price } = req.body
    if(!name || !description || !category || !size || !price) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body)
        console.log(updatedProduct)
        res.redirect('/dashboard')
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const deleteProduct = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.productId)
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