const getProductCardsAdmin = (products) => {
    let html = '';
    console.log(products)
    products.map(product => {  
        html += `
        <div class="productCard">
            <img class="productImg" src="${product.image}" alt="${product.name}">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productText">${product.description}</p>
            <p class="productPrice productText">${product.price}€</p>
            <div class='btnCard'>
                <a class="productLink" href="/dashboard/${product._id}">Ver detalle</a>
                <a class="productLink" href="/dashboard/${product._id}/edit">Editar</a>
                <a class="productLink" href="/dashboard/${product._id}/delete">Eliminar</a>
            </div>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCardsAdmin;