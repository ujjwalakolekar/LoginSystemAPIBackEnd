const loginSchema = require("../db/userdb")

const bcrypt = require("bcrypt")


//post
exports.postLogin = async(login)=>
{
    try {
        const emailExists = await loginSchema.findOne({Email:login.Email})
        if(emailExists){
            return {errors:true,message:"Email Already Exists"}
        }
        let salt = await bcrypt.genSalt(10)
        const incriptedPassword = await bcrypt.hash(login.Password,salt)
        const logins = await new loginSchema(
            {FirstName : login.FirstName,LastName : login.LastName,Email :login.Email,Password:incriptedPassword})
        const data = await logins.save()
        return{errors:false,data:data}
    } catch (error) {
        return{errors:true,message:errors.message}
    }
}

//get
exports.getLogin = async ()=>
{
    try {
        const data = await  loginSchema.find()
        return{errors:false,data:data}
    } catch (error) {
        return{errors:true,message:error.message}
    }
}

//put
exports.putLogin = async (Id,login)=>
{
    try {
        const data = await loginSchema.findByIdAndUpdate(Id,login,{new:true})
        return {errors:false,data:data}
    } catch (error) {
        return {errors:true,message:error.message}
    }
}

//delete
exports.deleteLogin = async (Id)=>
{
    try {
        await loginSchema.findByIdAndDelete(Id,{new:true})
        return {error:false,data:"Delete Data Sucessfully"}
    } catch (error) {
        return {errors:true,message:error.message}
    }
}

//get1
exports.getDataLogin = async (Id)=>
{
    try {
        const data = await loginSchema.findById(Id)
        return {error:false,data:data}
    } catch (error) {
        return {errors:true,message:error.message}
        
    }
}
