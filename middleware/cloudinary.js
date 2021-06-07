const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "urban-hobbies",
  },
});

const upload = multer({ storage });
//! Cloudinary Setup - END

module.exports = upload;
