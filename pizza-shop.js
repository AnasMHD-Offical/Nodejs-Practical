const EventEmitter = require("events")

class orderPizza extends EventEmitter{
    constructor(){
        super()
        this.orderNumber  = 0
    }
    order(size,topping){
        this.orderNumber++
        this.emit("order",size,topping)
    }
    display(){
        console.log(`Current order number : ${this.orderNumber}`);
    }
}
module.exports = orderPizza