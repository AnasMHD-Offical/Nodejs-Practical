const express = require("express")
const app = express();
const path = require("path")

const publicPath = path.resolve(__dirname,"public")
app.use(express.static("public"))
//Accessing a  folder inside public
// app.use("/public",express.static("image"))
 app.use(publicPath,express.static("image"))
app.get("/",(req,res)=>{
   res.send("hello manh")
})


const PORT = process.env.PORT || 2006

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:2006");
})



