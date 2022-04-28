const mongoose = require("mongoose")
const loginSchema = mongoose.Schema({
    FirstName : {type:String,requried:true},
    LastName : {type:String,requried:true},
    Email : {type:String,requried:true},
    Password : {type:String,requried:true}
    
})

module.exports = mongoose.model("/login",loginSchema)