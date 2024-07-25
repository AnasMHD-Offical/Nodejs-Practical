const EventEmitter = require("events")
const orderPizzaClass  = require("./pizza-shop")
const orderPizza = new orderPizzaClass()
const FriesMachineClass = require("./FriesMachine")
const FriesMachine = new FriesMachineClass()


orderPizza.on("order",(size,topping)=>{
    console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
    FriesMachine.serveFries(`${size}`)
})

orderPizza.order("medium","bbq")
orderPizza.display()