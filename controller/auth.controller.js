const usermodel = require('../models/user.model');



 
const registeruser = async (req , res) => {
    const {name , email , password} = req.body

    try {
      const user = await usermodel.findOne({

      })
    } catch (error) {
      
    }
}

const loginuser = async (req , res) => {

}

const logout = async (req , res) => {

}

      
module.exports = {registeruser, loginuser, }

 