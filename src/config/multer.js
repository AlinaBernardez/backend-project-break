const multer = require('multer');

//Multer config for image upload
let storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(__dirname + '..' + '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage }).single('image');

module.exports = upload