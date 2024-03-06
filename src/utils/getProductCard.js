const getProductCards = (products) => {
    let html = '';
    products.map(product => {
        let url = product.image
        let id = url.search('uploads')
        let idCut = id + 7
        let imgpath = url.slice(idCut)
        console.log(imgpath)
        html += `
        <div class="productCard">
            <img class="productImg" src=${imgpath} alt="${product.name}">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productText">${product.description}</p>
            <p class="productPrice productText">${product.price}€</p>
            <a class="productLink" href="/products/${product._id}/detail">Ver producto</a>
        </div>
        `;
    })
    return html;
}

module.exports = getProductCards;