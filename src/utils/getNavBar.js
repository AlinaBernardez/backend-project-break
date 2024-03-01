const getNavBar = () => {
    const navBar = `
    <div class='navContainer'>
        <div class='navCategories'>
            <a href='/products'><p class='navText'>All</p></a>
            <a href='/products/dresses'><p class='navText'>Dresses</p></a>
            <a href='/products/trousers'><p class='navText'>Trousers</p></a>
            <a href='/products/shoes'><p class='navText'>Shoes</p></a>
            <a href='/products/skirts'><p class='navText'>Skirts</p></a>
            <a href='/login'><p class='navText'>Login</p></a>
        </div>
    </div>
    `
    return navBar
};

const getNavBarAdmin = () => {
    const navBarAdmin = `
    <div class='navContainer'>
        <div class='navCategories'>
            <a href='/dashboard'><p class='navText'>All</p></a>
            <a href='/dashboard/dresses'><p class='navText'>Dresses</p></a>
            <a href='/dashboard/trousers'><p class='navText'>Trousers</p></a>
            <a href='/dashboard/shoes'><p class='navText'>Shoes</p></a>
            <a href='/dashboard/skirts'><p class='navText'>Skirts</p></a>
            <a href='/addProduct'><p class='navText'>Add product</p></a>
            <form action='/logout' method='POST'>
                <button class="navText logoutBtn" type='submit'>Logout</button>
            </form>
        </div>
    </div>
    `
    return navBarAdmin
};

module.exports = {
    getNavBar,
    getNavBarAdmin
}