const registeruser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // check user exist
    const isuseralreadyExist = await usermodel.findOne({ email });

    if (isuseralreadyExist) {
      return res.status(400).json({
        message: "user already exists"
      });
    }

    // password validation
    if (password.length < 6) {
      return res.status(400).json({
        message: "password must be at least 6 characters"
      });
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // create user
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

// cookie set karo
res.cookie("token", token);

res.status(201).json({
  message: "user registered successfully",
  user: newuser,
  token
});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error"
    });
  }
};