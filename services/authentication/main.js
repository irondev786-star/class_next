const express=require("express")
const router=express.Router()

router.use("/register",require("./register/register.js"))

module.exports=router