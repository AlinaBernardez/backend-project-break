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

const getProductForm = (type, id) => {
    let form = `
    <form class='productForm' ${type == 'new' ? action='/dashboard' : action=`/dashboard/${id}`} enctype="multipart/form-data" method='post'>
        <h2 class='formTitle'>Create new product</h2>
        <div class='inputBox'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' required />
        </div>
        <div class='inputBox'>
            <label for='description'>Description:</label>
            <input type='text' id='description' name='description' required />
        </div>
        <div class='inputBox'>
            <label for='image'>Image:</label>
            <input type="file" id='image' name='image'/>
        </div>
        <div class='smallInput'>
            <div class='inputBox'>
                <label for='category'>Category:</label>
                <select id='category' name='category' required >
                    <option value='vestidos'>Dresses</option>
                    <option value='pantalones'>Trousers</option>
                    <option value='zapatos'>Shoes</option>
                    <option value='faldas'>Skirts</option>
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
                <input type='text' id='price' name='price' required />
            </div>
        </div> 
        ${type == 'new' ? 
        `<button class='formButton' type='submit'>CREATE PRODUCT</button>` : 
        `<button class='formButton' type='submit'>EDIT PRODUCT</button>`
        }
    </form>
    `
    return form
}

module.exports = {
    getAuthForm,
    getProductForm
};