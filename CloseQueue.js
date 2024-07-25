const fs = require("fs")

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close",() => {
    console.log("This close callback inside reableStream");
})
fs.readFile(__filename,()=>{
    console.log("this is readFile 1");
    setImmediate(()=>console.log("setImmediate 1 rF1"))
})

Promise.resolve().then(()=>{console.log("this is a promise 1");})
process.nextTick(()=>{console.log("this is process.next 1");})
setTimeout(()=>console.log("SetTimeout 1"),0)