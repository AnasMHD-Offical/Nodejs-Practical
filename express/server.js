const express = require("express")
const app = express();


//Middleware :
const logger = (req,res,next) =>{
    console.log("Logged");
    next()
}

const reqTime = function(req,res,next){
    req.reqTime = Date.now()
    next()
}

app.use(logger)
app.use(reqTime)
app.get("/login",(req,res)=>{
    res.send(`Current Time : ${req.reqTime}`)
    // res.send("Welcome to the login page!")
})

const PORT = process.env.PORT || 2006

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:2006");
})




