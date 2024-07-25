const fs = require("fs")
const zlib = require("zlib")

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./text.txt",{
    encoding:"utf-8",
    highWaterMark:2, 
})
readableStream.pipe(gzip).pipe(fs.WriteStream("./file.txt.gz"))
const writableStream = fs.createWriteStream("./file.txt")

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writableStream.write(chunk)
})

readableStream.pipe(writableStream)