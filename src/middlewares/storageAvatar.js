const multer = require('multer');
const path = require('path')

const storageDisk = (routeFile) => {
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            let folder = path.resolve('public', 'img', routeFile);
            callback(null, folder);
        },
        filename: (req, file, callback) => {
            let imageName = Date.now() + file.originalname;
            callback(null, imageName);
        }
    })
    const fileUpload = multer({ storage });
    return fileUpload;
}

module.exports = storageDisk;