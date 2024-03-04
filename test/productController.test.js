const mongoose = require('mongoose');
const request = require('supertest');
const { showProducts, showFilteredProducts, createProduct, showProductById } = require('../src/controllers/productController');
const Product = require('../src/models/Product');
const { app } = require('../src/index');

jest.setTimeout(3 * 60 * 1000)

describe('GET /products', () => {
    it('Should show all created products', async() => {
        await request(app)
            .get('/products')
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    }, 15000)
});

// let session = await request(app).post('/login').send({email: 'test1@test1.com', password: 'test1test1'})
// let token = session.body;
// console.log(token)

// describe('/dashboard', () => {
//     it('Should show all created products', () => {
        
//     })
// });

// describe('/dashboard/:category', () => {
//     it('Should show products by category', () => {
        
//     })
// });

// describe('/dashboard', () => {
//     it('Should add new product', async() => {
//         const product = {name: 'test', description: 'test product', category: 'shoes', size: 'S', price: '100'}
//         let countBefore = await Product.countDocuments({})
//         console.log(countBefore)
//         await request(app).post('/dashboard').set({ Authorization: `Bearer: ${token}`}).send(product)
//         let countAfter = await Product.countDocuments({})
//         console.log(countAfter)
//         expect(countAfter).toBe(parseInt(countBefore) + 1)
//     })
// });

// describe('/dashboard/:productId/detail', () => {
//     it('Should show products by category', () => {
        
//     })
// });