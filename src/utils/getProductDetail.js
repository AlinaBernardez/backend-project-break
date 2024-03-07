const getProductDetail = (product, isAdmin) => {
    let detail = `
    <div class='detailCard'>
        <img class="detailImg" width='100' src=${!product.image ? '/default-image.png' : `/image-${product._id}`} alt="${product.name}">
        <div class='detailContent'>
            <h2 class="productTitle">Product: ${product.name}</h2>
            <p class="productPrice productText">Price: ${product.price}€</p>
            <p class="productText">Description: ${product.description}</p>
            <p class="productText">Size: ${product.size}</p>
            <p class="productText">Category: ${product.category}</p>
            ${isAdmin ? 
            `<div class='btnCard'>
                <a class="productLink" href="/dashboard/${product._id}/edit">Editar</a>
                <form action='/dashboard/${product._id}/delete' method='POST'>
                    <button class="productLink deleteBtn" type='submit'>Eliminar</button>
                </form>
            </div>` :
            `<div></div>`
            }
        </div>
    </div>
    `
    return detail
};

module.exports = getProductDetail;