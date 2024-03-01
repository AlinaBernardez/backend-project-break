const getAuthForm = (type) => {
    let form;
    if(type == 'register') {
        form = `
        <form class='form' action='/register' method='post'>
            <h2 class='formTitle'>Create new user</h2>
            <div class='inputBox'>
                <label for='userName'>User name</label>
                <input type='text' id='userName' name='userName' required />
            </div>
            <div class='inputBox'>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div class='inputBox'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password'/>
            </div>
            <button class='formButton' type='submit'>CREATE USER</button>
            <p class='registerText'>Or <a class='registerText' href='/login'><b>LOG IN</b> with your account</a></p>
        </form>
        `
        return form
    }
    else if(type == 'login') {
        form = `
        <form class='form' action='/login' method='post'>
            <h2 class='formTitle'>Log in</h2>
            <div class='inputBox'>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div class='inputBox'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password'/>
            </div>
            <button class='formButton' type='submit'>LOG IN</button>
            <p class='registerText'>Or <a class='registerText' href='/register'><b>REGISTER</b> new account</a></p>
        </form>
        `
        return form
    }
};

const getProductForm = (type, product) => {
    let form = `
    ${type == 'new' ? 
    `<form class='productForm' action='/dashboard' method='post'>` :
    `<form class='productForm' action='/dashboard/${product._id}' method='post'>` 
    }
    ${type == 'new' ? 
    `<h2 class='formTitle'>Create new product</h2>` :
    `<h2 class='formTitle'>Edit product</h2>` 
    }
        <div class='inputBox'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' ${product && `value=${product.name}`} required />
        </div>
        <div class='inputBox'>
            <label for='description'>Description:</label>
            <input type='text' id='description' name='description' ${product && `value=${product.description}`} required />
        </div>
        <div class='smallInput'>
            <div class='inputBox'>
                <label for='category'>Category:</label>
                <select id='category' name='category' required >
                    <option value='dresses'>Dresses</option>
                    <option value='trousers'>Trousers</option>
                    <option value='shoes'>Shoes</option>
                    <option value='skirts'>Skirts</option>
                </select>
            </div>
            <div class='inputBox'>
                <label for='size'>Size:</label>
                <select id='size' name='size' required >
                    <option value='XS'>Extra small</option>
                    <option value='S'>Small</option>
                    <option value='M'>Medium</option>
                    <option value='L'>Large</option>
                    <option value='XL'>Extra large</option>
                </select>
            </div>
            <div class='inputBox'>
                <label for='price'>Price:</label>
                <input type='text' id='price' name='price' ${product && `value=${product.price}`} required />
            </div>
        </div> 
        ${type == 'new' ? 
        `<button class='formButton' type='submit'>CREATE PRODUCT</button>` : 
        `<button class='formButton' type='submit'>EDIT PRODUCT</button>`
        }
    </form>
    `
    return form
};

const getImageForm = (id) => {
    const form = `
    <form class='productForm' action=/dashboard/${id}/newImage enctype="multipart/form-data" method='post'>
    <h2 class='formTitle'>Add image</h2>
        <div class='inputBox'>
            <label for='image'>Image:</label>
            <input type="file" id='image' name='image'/>
        </div>
        <button class='formButton' type='submit'>ADD IMAGE</button>
    </form>
    `
    return form
}

module.exports = {
    getAuthForm,
    getProductForm,
    getImageForm
};