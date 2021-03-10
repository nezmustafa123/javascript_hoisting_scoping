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
//all together makes call stack

//waits for callback functions to come procided by event loop
//arguments object is array of all arguments passed into function when called
//if hundreds of execution contexts engine keeps track with a call stack
//execution contexts stacked on top of each other one on top of call stack is the one that is currently running
//when finished running be popped off the stack
//javascript has only one thread of execution can do one thing at a time
//when returning from function execution context popped off call stack
//call stack is like map for javascript engine