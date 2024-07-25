const http = require("http")
const fs  = require("fs")
const server = http.createServer((req,res)=>{
    res.end(req.url)
    // const name = "Anas muhammed";
    // const superHero = {
    //     fname : "Anas",
    //     Lname : "Muhammed"
    // }
    // res.writeHead(200,{"Content-Type" : "text/html"})
    // fs.createReadStream("./index.html").pipe(res)
    // let html = fs.readFileSync("./index.html","utf-8")
    // html = html.replace("{{name}}",name )
    // res.end(html)
})
const PORT = 3000

server.listen(PORT,()=>{
    console.log(`The Server Running on http://localhost:3000`);
})
