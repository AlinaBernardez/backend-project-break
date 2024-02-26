const getNavBar = () => {
    const navBar = `
    <div class='navContainer'>
        <div class='navCategories'>
            <a href='/products'><p class='navText'>Todo</p></a>
            <a><p class='navText'>Vestidos</p></a>
            <a><p class='navText'>Pantalones</p></a>
            <a><p class='navText'>Zapatos</p></a>
            <a><p class='navText'>Faldas</p></a>
            <a><p class='navText'>Login</p></a>
        </div>
    </div>
    `
    return navBar
};

const getNavBarAdmin = () => {
    const navBarAdmin = `
    <div class='navContainer'>
        <div class='navCategories'>
            <a href='/dashboard'><p class='navText'>Todo</p></a>
            <a><p class='navText'>Vestidos</p></a>
            <a><p class='navText'>Pantalones</p></a>
            <a><p class='navText'>Zapatos</p></a>
            <a><p class='navText'>Faldas</p></a>
            <a href='/dashboard/new'><p class='navText'>Añadir producto</p></a>
        </div>
    </div>
    `
    return navBarAdmin
};

module.exports = {
    getNavBar,
    getNavBarAdmin
}