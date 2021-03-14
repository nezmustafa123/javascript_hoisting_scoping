'use strict';

function calcAge(birthYear) {
    const age = 2037- birthYear;
    //parameter is local variable
    console.log(firstName);
    //scope reaches out and prints variable
    
    function printAge() {
        //finds name from global scope
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
//        console.log(output);
        //scope reaches out and finds parameter or outer function just like variable
        
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            //different variable
            //can have different functions with same parameter they're only in that scope
            //javascript engine will find variable and not have look up in scope chain
            //outside block firstName is Nez
            const str = `You're a millenial, ${firstName}`;
            console.log(str);
            
            function add(a, b) {
                return a + b;
                //this function is block scoped
            }
            //redifine variable inside child scope (inner)
            
            output = 'New output'
            //manipulateing variable from inner scope
            //if created a new one with same name name it would print original output
        }
//        console.log(str);
        //block scoped so cannot access string outside
//        console.log(millenial);
        //millenial variable function scoped so can access it within entire function even if it's declated in block
//        add(2,3);
        //function block scoped in strict mode  can't use it always use strict mode
        console.log(output)
    }
    //own execution context and variable environment
    printAge();
    return age;
}
const firstName = 'Nez';
//variable lookup found variable in thhe parent scope
calcAge(1990);
//code in function executed once it's called
//scope is one way street scope can have access to outer scope



//hoisting 
//code is scanned for variable declerations before it is executed 
//function declarations added to variable environment object
//use function declerations before declared in code