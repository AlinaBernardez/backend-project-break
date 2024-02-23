const getProductCards = (products) => {
    let html = '';
    console.log(products)
    products.map(product => {  
        html += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}€</p>
            <a href="/products/${product._id}">Ver detalle</a>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCards;