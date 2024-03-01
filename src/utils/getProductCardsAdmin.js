const getProductCardsAdmin = (products) => {
    let html = '';
    products.map(product => {  
        html += `
        <div class="productCard">
            <img class="productImg" src="/image-${product._id}" alt="${product.name}">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productText">${product.description}</p>
            <p class="productPrice productText">${product.price}€</p>
            <div class='btnCard'>
                <a class="productLink" href="/dashboard/${product._id}/detail">Detalle</a>
                <a class="productLink" href="/dashboard/${product._id}/edit">Editar</a>
                <form action='/dashboard/${product._id}/delete' method='POST'>
                    <button class="productLink deleteBtn" type='submit'>Eliminar</button>
                </form>
            </div>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCardsAdmin;