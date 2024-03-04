const multer = require('multer');
const path = require('path');
const fs = require('node:fs');

let uploadPath = path.join(__dirname, '/../../uploads')

//Multer config for image upload
let storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + req.params.productId)
    }
});
const upload = multer({ storage: storage }).single('image');

const deleteUploaded = (path) => {
    if(path) {
        try {
            fs.unlinkSync(path)
            console.log('image deleted with product')
        } catch(err) {
            console.log(err.message)
        }
    }
};

module.exports = {
    upload,
    deleteUploaded
}