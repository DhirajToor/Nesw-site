const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dwehenmre',
    api_key: '999296871893873',
    api_secret: 'ZkhFnZ55ZbQSp16txiS3ehdzxuU'
});

module.exports = cloudinary;