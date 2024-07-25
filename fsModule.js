const fs = require("fs/promises")
fs.readFile("./text.txt","utf-8")
.then((data) => console.log(data))
.catch((error) => new Error(`${error}`))
console.log("hello mone!");

async function readFile(){
    try{
        const data = await fs.readFile("text.txt","utf-8")
        console.log(data);
        console.log("hello");
    }catch(err){
        throw err
    }

}
readFile()


// const fs = require("fs")

// //Synchronus readFile
// const readFileSyncEd = fs.readFileSync("./text.txt","utf-8")
// console.log(readFileSyncEd);
// //Asynchronus readFile
// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
// //Synchronus write file
// fs.writeFileSync("./text.txt","Hello World! ")
// //Asynchrous write file
// fs.writeFile("./text.txt","hello Anas! ",{flag : "a"},(err)=>{
//     if(err) throw err
//     console.log("Text Overrided")
// })