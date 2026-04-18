const usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs')


const registeruser = async (req , res) => {
    const {fullname , email , password} = req.body
    
    try {
      const isuseralreadyExist = await usermodel.findOne({
        email
      })

      if(isuseralreadyExist) {
        return res.status(400).json({
          message: "user is already exist"
        })

        if(password.lenght < 6) {
          return res.status(400).json({
            message: "password must be at least 6 characters"
          })


          const passwordHash = await bcrypt.hash(password , 10);

          const newuser = new usermodel({
            fullname,
            email,
            password: passwordHash
          })
        
        }
      }
    } catch (error) {
      
    }
}

const loginuser = async (req , res) => {

}

const logout = async (req , res) => {

}

      
module.exports = {registeruser, loginuser, }

 