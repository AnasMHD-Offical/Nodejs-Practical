const http = require("http")
const fs  = require("fs")
const server = http.createServer((req,res)=>{
    // res.end(req.url)
    if(req.url ==="/"){
        res.writeHead(200,{"Content-Text" : "text/html"})
        res.end("<h1>Home Page</h2>")
    }else if(req.url === "/about"){
        res.writeHead(200,{"Content-Text" : "text/html"})
        res.end("<h1>About Page</h2>")
    }else if(req.url ==="/contact"){
        res.writeHead(200,{"Content-Text" : "text/html"})
        res.end("<h1>Contact page</h2>")
    }else if(req.url ==="/api"){
        res.writeHead(200,{"Content-Text" : "application/json"})
        res.end(JSON.stringify({
            fname : "Anas",
            lname : "Muhammed"
        }))
    }
    else{
        res.writeHead(404)
        res.end("<h1>Page Not Found!</h1>")
    }

})
const PORT = 3000

server.listen(PORT,()=>{
    console.log(`The Server Running on http://localhost:3000`);
})
