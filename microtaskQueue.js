console.log("log 1");
//First the nextTick Queue will exicute then only the promise Queue will execute
process.nextTick(()=>{console.log("this is process.next 1");})
Promise.resolve().then(()=>{console.log("this is a promise 1");})
console.log("log 2");

//Preority order : 
/**
     nextTick Queue
            ^
            |
      Promise Queue
            ^
            |
        timer Queue
            ^
            |
        I/O Queue
            ^
            |
        check Queue
            ^
            |
        close Queue
 */