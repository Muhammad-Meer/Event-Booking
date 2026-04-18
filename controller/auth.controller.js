const usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const registeruser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const isuseralreadyExist = await usermodel.findOne({ email });

    if (isuseralreadyExist) {
      return res.status(400).json({
        message: "user already exists"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "password must be at least 6 characters"
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newuser = await usermodel.create({
      fullname,
      email,
      password: passwordHash
    });

    const token = jwt.sign(
      { id: newuser._id },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "user registered successfully",
      user: {
        _id: newuser._id,
        fullname: newuser.fullname,
        email: newuser.email
      },
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error"
    });
  }
};

async function loginuser(req, res) {

}

module.exports = {
  registeruser,
  loginuser
}