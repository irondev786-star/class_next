const express=require("express")
const app=express()

app.use(["/auth","/users"],require("./services/authentication/main.js"))
app.listen(5000,()=>{
    console.log("Server has started")
})