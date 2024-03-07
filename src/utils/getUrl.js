const getUrl = (prod) => {
    let url = prod.image
    let id = url.search('uploads')
    let idCut = id + 7
    let imgpath = url.slice(idCut)
    return imgpath
};

module.exports = getUrl;