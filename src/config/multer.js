const multer = require('multer');
const path = require('path');

let uploadPath = path.join(__dirname, '/../../uploads')

//Multer config for image upload
let storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage }).single('image');

module.exports = upload