const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")

const app = express()
const login = require("./Router/userinfo")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/login",login)
app.listen(process.env.PORT || 8080)

mongoose.connect(process.env.LOCALDB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Welcome in LoginSystem");
})