setTimeout(()=>{console.log("this is setTimeout 1");},0)
setTimeout(()=>{
    console.log("this is setTimeout 2")
    process.nextTick(()=>{
        console.log("nextTick 1 insside setTimeout 2");
    })
},0)
setTimeout(()=>{console.log("this is setTimeout 3");},0)

console.log("log 1");
//First the nextTick Queue will exicute then only the promise Queue will execute
Promise.resolve().then(()=>{console.log("this is a promise 1");})
process.nextTick(()=>{console.log("this is process.next 1");})
console.log("log 2");
