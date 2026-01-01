// Higher-Order & Callbacks Functions

// একটা function যদি আরেকটা function -কে বা একের অধিক function - কে parameter হিসাবে receive করে তখন সেটা হলো higher order function


// Higher order function
function greet(name, sayHello){
    const message = "say hello, " + name ;
    sayHello(message);
    
}

// callback function 
function sayHello(val){
    console.log(val, "say hello",);
}
// greet("antu", sayHello)



function calculator (val1, val2, fn){
    return fn(val1, val2)
    
}

function addition(val1, val2){
    return val1 + val2
}
function multi(val1, val2){
    return val1 * val2
}

const totalAdd = calculator(12, 5, addition)
const totalMulti = calculator(12, 5, multi)
console.log(totalAdd);
console.log(totalMulti);