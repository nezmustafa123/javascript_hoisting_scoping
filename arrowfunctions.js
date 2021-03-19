'use strict';


var firstName = 'Matilda';


const nez = {
    firstName: 'Nez',
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037- this.year);
        
    },
    greet: () => console.log(`Hey ${this.firstName}`),
    //will print out hey matilda because this keyword points to window object 
    //firstname property added to window firstName:'Matilda'
    //never use var or arrow function as a method
    //this.first name translates to window.firstName 
};

nez.greet();
//will return undefined because arrow functions don't have their own this keyword
//this is pointing to window on window there's no firstname property so returns undefined'
//this points to the window object becauase arrow functions points to global scope arrow function uses parent scopes this keyword
//not a code block doesn't have its own scope
console.log(this.firstName)


// normal function inside method
const nez = {
    firstName: 'Nez',
    year: 1990,
    calcAge: function() {
        console.log(this);
        //this = nez
        console.log(2037- this.year);
        //function inside method
        
        const self = this;
          //outside function this keyword set to nez
        const isMeillenial = function() {
            
            //get around it using self create a variable set it qeual to this
           // through the scope chain javascript goes up the scope chain and gets the this keyword
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        
        
        const isMeillenial = function() {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        
        
        //calling function again
       // regular funciton call not attached to anything this keyword is undefined
        //because its a regular function call
        isMillenial();
        
    },
    greet: () => console.log(`Hey ${this.firstName}`),
    //will print out hey matilda because this keyword points to window object 
    //firstname property added to window firstName:'Matilda'
    //never use var or arrow function as a method
    //this.first name translates to window.firstName 
};

nez.greet();
nez.calcAge();
