 const jwt = require("jsonwebtoken")
// const Router = require("express").Router();
const auth = async (req,res,next)=>
{
    try {
        const token = req.header("auth")
        const verifyUser = await jwt.verify(token,process.env.SEC)
        if(!users){
            res.status(404).json({errors:true,message:"Invalid Token"})
        }
        next()

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
module.exports = auth;