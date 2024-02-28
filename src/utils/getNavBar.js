const getNavBar = () => {
    const navBar = `
    <div class='navContainer'>
        <div class='navCategories'>
            <a href='/products'><p class='navText'>All</p></a>
            <a><p class='navText'>Dresses</p></a>
            <a><p class='navText'>Trousers</p></a>
            <a><p class='navText'>Shoes</p></a>
            <a><p class='navText'>Skirts</p></a>
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
            <a><p class='navText'>Dresses</p></a>
            <a><p class='navText'>Trousers</p></a>
            <a><p class='navText'>Shoes</p></a>
            <a><p class='navText'>Skirts</p></a>
            <a href='/dashboard/new'><p class='navText'>Add product</p></a>
        </div>
    </div>
    `
    return navBarAdmin
};

module.exports = {
    getNavBar,
    getNavBarAdmin
}