const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');
const getProductCards = require('../utils/getProductCard')
const getProductCardsAdmin = require('../utils/getProductCardsAdmin')
const baseHtml = require('../utils/baseHtml');
const { getNavBar, getNavBarAdmin } = require('../utils/getNavBar');

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
    const newProductForm = `
    <form class='form' action='/dashboard'enctype="multipart/form-data" method='post'>
        <h2 class='formTitle'>Create new product</h2>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' required />
        <label for='description'>Description:</label>
        <input type='description' id='description' name='description' required />
        <label for='image'>Image:</label>
        <input type="file" id='image' name='image'/>
        <label for='category'>Category:</label>
        <div class='smallInput'>
        <select type='category' id='category' name='category' required >
            <option value='vestidos'>Vestidos</option>
            <option value='pantalones'>Pantalones</option>
            <option value='zapatos'>Zapatos</option>
            <option value='faldas'>Faldas</option>
        </select>
        <label for='size'>Size:</label>
        <select type='size' id='size' name='size' required >
            <option value='XS'>Extra small</option>
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
            <option value='XL'>Extra large</option>
        </select>
        <label for='price'>Price:</label>
        <input type='text' id='price' name='price' required />
        </div>
        <button class='formButton' type='submit'>CREATE PRODUCT</button>
    </form>
    `
    const html = baseHtml + getNavBar() + newProductForm
    res.send(html)
};

const createProduct = async(req, res) => {
    console.log(req.file)
    const prodImage = {
        data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)),
        contentType: 'image/png'
    }
    console.log(prodImage)
    const { name, description, category, size } = req.body
    if(!name || !description || !prodImage || !category || !size) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const newProduct = await Product.create(req.body, prodImage)
        return res.json(newProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showEditProduct = async(req, res) => {
    const editProductForm = `
    <form action='/dashboard/:productId' enctype="multipart/form-data" method='post'>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' required />
        <label for='description'>Description:</label>
        <input type='description' id='description' name='description' required />
        <label for='category'>Category:</label>
        <select type='category' id='category' name='category' required >
            <option value='vestidos'>Vestidos</option>
            <option value='pantalones'>Pantalones</option>
            <option value='zapatos'>Zapatos</option>
            <option value='faldas'>Faldas</option>
        </select>
        <label for='size'>Size:</label>
        <select type='size' id='size' name='size' required >
            <option value='XS'>Extra small</option>
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
            <option value='XL'>Extra large</option>
        </select>
        <label for='price'>Price:</label>
        <input type='text' id='price' name='price' required />
        <button type='submit'>Create product</button>
    </form>
    `
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
    createProduct, 
    showEditProduct,
    updateProduct,
    deleteProduct
};