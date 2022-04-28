const auth = require("../Middleware/auth")
const { postLogin,getLogin,putLogin,deleteLogin,getDataLogin } = require("../Controller/userController")
const {login} = require("../Controller/loginController")


const Router = require("express").Router();

Router.post("/insert", async (req,res)=>{
    try {
        const result = await postLogin(req.body)
        if (result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
    } catch (error) {
       res.status(404).json({message:error.message}) 
    }
})

//login
Router.post("/login", async (req,res)=>{
    try {
        const result = await login(req.body)
        if (result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
    } catch (error) {
       res.status(404).json({message:error.message}) 
    }
})


Router.get("/get",auth, async (req,res)=>{
    try {
        const result = await getLogin()
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
    } catch (error) {
        res.status(404).json({message:error.message}) 
    }
})

Router.put("/put/:Id", async (req,res)=>{
    try {
        const Id = req.params.Id;
        const result = await putLogin(Id,req.body)
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
    } catch (error) {
        res.status(404).json({message:error.message}) 
    }
})

Router.delete("/delete/:Id", async (req,res)=>{
    try {
        const Id = req.params.Id;
        const result = await deleteLogin(Id,req.body)
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
        
    } catch (error) {
        res.status(404).json({message:error.message}) 
    }
})

Router.get("/getdata/:Id",async (req,res)=>{
    try {
        const Id = req.params.Id;
        const result = await getDataLogin(Id,req.body)
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
        
    } catch (error) {
        res.status(404).json({message:error.message})       
    }
})
module.exports = Router;