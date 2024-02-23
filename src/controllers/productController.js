const Product = require('../models/Product');
const getProductCards = require('../utils/getProductCard')

const showProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        const response = getProductCards(allProducts)
        console.log('response:', response)
        res.send(response)
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
        res.send(response)
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
    <form action='/dashboard' method='post'>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' required />
        <label for='description'>Description:</label>
        <input type='description' id='description' name='description' required />
        <label for='category'>Category:</label>
        <select type='category' id='category' name='category' required >
            <option value='camisetas'>Camisetas</option>
            <option value='pantalones'>Pantalones</option>
            <option value='zapatos'>Zapatos</option>
            <option value='accesorios'>Accesorios</option>
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
    res.send(newProductForm)
};

const createProduct = async(req, res) => {
    const { name, description, category, size } = req.body
    if(!name || !description || !category || !size) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const newProduct = await Product.create(req.body)
        return res.json(newProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showEditProduct = async(req, res) => {
    const editProductForm = `
    <form action='/dashboard/:productId' method='post'>
        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' required />
        <label for='description'>Description:</label>
        <input type='description' id='description' name='description' required />
        <label for='category'>Category:</label>
        <select type='category' id='category' name='category' required >
            <option value='camisetas'>Camisetas</option>
            <option value='pantalones'>Pantalones</option>
            <option value='zapatos'>Zapatos</option>
            <option value='accesorios'>Accesorios</option>
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
        await Product.findByIdAndDelete(req.params._id)
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