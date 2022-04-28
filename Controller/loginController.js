const loginSchema = require("../db/userdb")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.login = async(user)=>
{
    try {
        const usersExits = await loginSchema.findOne({Email:user.Email})
        if(!usersExits){
            return {errors:true,message:"Email Or Password Invalid"}
        }
        const PasswordExits = await bcrypt.compare(user.Password,usersExits.Password)
        if(!PasswordExits){
            return {errors:true,message:"Email Or Password Invalid"}
        }
        const token = await jwt.sign({_id:usersExits._id},process.env.SEC)
        return {error:false,data:{token:token,user:usersExits}}
    } catch (error) {
        return {errors:true,message:error.message}
    }
}