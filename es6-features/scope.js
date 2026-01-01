// Scope (Global, Function, Block Scope)
"use strict"; 

const name = "john"; // Global

// function scope

function add(){
    var age = 20;
    console.log(age);

    function modify(){
        const isMarried = false;
        console.log("He is " + age + " and married " + isMarried);
    }
    isMarried = true; // window.isMarried = true
    console.log("His married status is ", isMarried)

    modify()
   
}

add();


name = "antu"; // it takes as a window.name = "antu" and without this "use strict" it will give you an error
console.log(name)