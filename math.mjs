// import math from "./math-esm.mjs"
//we can implement in 2 ways : 
import * as math from "./math-esm.mjs" 
//or
// import {add,sub} from "./math-esm.mjs"

const { add , sub} = math

console.log(add(4,9));
console.log(sub(4,9));

console.log(math.add(2,6));
console.log(math.sub(2,6));
