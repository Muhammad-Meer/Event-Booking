const usermodel = require('../models/user.model');
const foodpartnermodel = require('../models/foodpartner.model');
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

const loginuser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "No body received"
    });
  }

  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error"
    });
  }
};

function logoutuser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "logout successfuly"
  });
}

const foodpartner = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const isuseralreadyExist = await foodpartnermodel.findOne({ email });

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

    const newuser = await foodpartnermodel.create({
      fullname,
      email,
      password: passwordHash
    });

    const token = jwt.sign(
      { id: newuser._id },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false
    });

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

const loginFoodPartner = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const user = await foodpartnermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email
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

module.exports = {
  registeruser,
  loginuser,
  logoutuser,
  foodpartner,
  loginFoodPartner
};