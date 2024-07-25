// 1.Path module
const path = require("path")

console.log(__dirname)
console.log(__filename)
//1 basename() 
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
//2.extname()
console.log(path.extname(__dirname));
console.log(path.extname(__filename));
//3.parse()
console.log(path.parse(__filename));
//4.format()
console.log(path.format(path.parse(__filename)));
//5.isAbsolute()
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./hgegr"))
//6.join()
console.log(path.join("folder1","folder2","index.html"));
//7.resolve()
console.log(path.resolve("folder1","folder2","index.html"));