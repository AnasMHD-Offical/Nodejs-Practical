//Adding the module into the application
// require("./Modules/localModules")
//Adding a specific function that export in the module and add int into a variable in this module and use it in the module 
// const add = require("./Modules/localModules")
// //call modules and specify the module wrapper
// require("./Modules/batman")
// require("./Modules/superman")

// let sum = add(1,6)
// let sum3 = add(9,6)
// console.log(sum);
// console.log(sum3);
// console.log("Hello World!");

//Example for cahcing
// const superhero = require("./superhero")
// console.log(superhero.getName());
// superhero.setName("Anas")
// console.log(superhero.getName());

// const newSuperhero = require("./superhero")

// console.log(newSuperhero.getName());
// newSuperhero.setName("Amal")
// console.log(newSuperhero.getName());

//Example for how we can avoid cahcing
// const superhero = require("./superherNonCached")
// const batman = new superhero("batman")
// console.log(batman.getName());
// batman.setName("Anas Muhammed")
// console.log(batman.getName());

// const superman = new superhero("Superman")
// console.log(superman.getName());

//Different import and export pattern
// const { add , multy } = require("./export")
// or
// const Math = require("./export")

// console.log(add(3,6));
// console.log(multy(3,6));

// console.log(Math.add(4,7));
// console.log(Math.multy(4,7));

// const sub = require("./export")

// console.log(sub.subtract(4,8));

const data = require("./data.json")
// const stringDAta = JSON.stringify(data)
// console.log(stringDAta)
// const jsonData = JSON.parse(stringDAta)
// console.log(jsonData)
console.log(data.name);
console.log(data.address);
console.log(data.address.location);
console.log(data.address.house);