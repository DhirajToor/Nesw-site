const User = require("../models/User");
const cloudinary = require('../utils/cloudinary')

exports.createUser = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder:images,
      // width:300,
      // crop:"scale",
    });
    console.log("req body", req.body);
    const { name, email, title, department, role } = req.body;
    if (!name || !email || !title || !role || !department) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
      image:{
        public_id:result.public_id,
        url:result.secure_url,
      },
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
