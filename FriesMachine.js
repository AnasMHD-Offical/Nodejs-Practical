class FriesMachine{
    serveFries(size){
        if(size === "medium" || size === "large"){
            console.log(`Serving a complementary fries!!`);
        }
    }
}

module.exports = FriesMachine