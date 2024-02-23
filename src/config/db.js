const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected')
    }
    catch(error) {
        console.log('Failed to connect:', error)
    }
};

module.exports = dbConnect;