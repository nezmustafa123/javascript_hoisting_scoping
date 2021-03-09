'use strict';

//code finished compiling
//ready to be executed global execution context (top level code) not inside function


const name = 'Nez';

const first = () => {
    let a = 1;
    const b = second();
    a = a + b;
    return a;
};

function second() {
    var c = 2;
    return c
    //function body only executed when called!
}

//execution context environment where javascript is executed
//javascript always runs inside execution context

//one gloval execution context default context  not inside any function 
//once global execution context executed functions executed and callbacks waited for
//one execution contecxt per function all together make the call stack
//inside execution context is cariables functions and arguments object
//each function has own execution context