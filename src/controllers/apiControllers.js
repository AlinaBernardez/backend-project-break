const Product = require('../models/Product');

const showProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        if(!allProducts) res.status(400).send({message: 'Could not find products'})
        return res.json(allProducts)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!'})
    }
};

const showFilteredProducts = async(req, res) => {
    try {
        const filter = req.params.category
        const filteredProducts = await Product.find({category: filter})
        if(!filteredProducts) res.status(400).send({message: 'Could not find products'})
        return res.json(filteredProducts)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const showProductById = async(req, res) => {
    try {
        const thisProduct = await Product.findById(req.params.productId)
        if(!thisProduct) res.status(400).send({message: 'Could not find this product'})
        return res.json(thisProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const createProduct = async(req, res) => {
    const { name, description, category, size, price } = req.body
    if(!name || !description || !category || !size || !price) {
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

const editProduct = async(req, res) => {
    const { name, description, category, size, price } = req.body
    if(!name || !description || !category || !size || !price) {
        res.status(400).send({message: 'All fields are required!'})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body)
        res.json(updatedProduct)
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

const deleteProduct = async(req, res) => {
    let id = req.params.productId
    try {
        await Product.findByIdAndDelete(id)
        return res.send('Product deleted!')
    }
    catch(error) {
        res.status(500).send({message: 'Something went wrong!', error})
    }
};

module.exports = {
    showProducts,
    showFilteredProducts,
    showProductById,
    createProduct,
    editProduct,
    deleteProduct
}