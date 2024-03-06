const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
        path: String,
        type: String,
        default:'/default-image.png',
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {timestamp: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;