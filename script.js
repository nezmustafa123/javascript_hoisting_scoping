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

//scoping how programs's variables are organized and acccessed where do variables live
//lexical scoping  is controlled by placement of functions and blocks in the code
// functton that is written inside other function has access to variables written inside parent function
//scrop space or environment in which a certain variable is declared
//global scope, function scop and block scope 
//in functions variable enviornment which is stored in functions execution context 
//scope of a variable reigion of code where certain variable can be accessed

//building scope/scope chain

const myName = 'Nez';

function first(){
    //first scope (function)
    const age = 30;
    
    if(age >= 30) {
        const decade = 3;
        var millenial = true; 
        
    }
    function second() {
        //second scope (function)
        const job = 'teacher';
        
        console.log(`%{myName} is a ${age} year old ${job}`);
    }
    
    second();
}

first();