function greet(name){
    console.log(`Hello ${name}`);
}

function greetuser(greetfn){
    const name = "Anas Muhammed"
    greetfn(name)
}
greetuser(greet )