const getProductDetail = (product, isAdmin) => {
    let detail = `
    <div class='detailCard'>
        <img class="productImg" src="${product.image}" alt="${product.name}">
        <div class='detailContent'>
            <h2 class="productTitle">Product: ${product.name}</h2>
            <p class="productText">Description: ${product.description}</p>
            <p class="productPrice productText">Price: ${product.price}€</p>
            ${isAdmin && 
            `<div class='btnCard'>
                <a class="productLink" href="/dashboard/${product._id}/edit">Editar</a>
                <a class="productLink" href="/dashboard/${product._id}/delete">Eliminar</a>
            </div>`
            }
        </div>
    </div>
    `
    return detail
};

module.exports = getProductDetail;