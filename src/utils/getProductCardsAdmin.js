const getProductCardsAdmin = (products) => {
    let html = '';
    console.log(products)
    products.map(product => {  
        html += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}€</p>
            <a href="/dashboard/${product._id}">Ver detalle</a>
            <a href="/dashboard/${product._id}/edit">Editar</a>
            <a href="/dashboard/${product._id}/delete">Eliminar</a>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCardsAdmin;