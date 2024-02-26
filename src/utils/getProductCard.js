const getProductCards = (products) => {
    let html = '';
    products.map(product => {  
        html += `
        <div class="productCard">
            <img class="productImg" src="${product.image}" alt="${product.name}">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productText">${product.description}</p>
            <p class="productPrice productText">${product.price}€</p>
            <a class="productLink" href="/products/${product._id}">Ver detalle</a>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCards;