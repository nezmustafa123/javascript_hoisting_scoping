//this keyword speacial variable created for every execution context (function )
//teakes value of the owner of the function in which the this keyword is used

//not static depends on how the function is called and its value is assigned when function is actually called
//ways function can be called
//method inside object; this = object that is calling the method method within object


const nez = {
    name: 'Jonas',
    year: 1990,
    calcAge: function() {
        return 2037 - this.year;
    }
};

nez.calcAge();
//this points to nez object

//calling functions as normal functions not attacked to functions
//function call; this = undefined if not instrict mode this will point wo window object


//arrow functions; this = this of surrounding function lexical (this) do NOT get their own this keyword

//event listener; this = dom element that the handler is attached to (left side of the dot)

//this keyword doesn't point to function using it and will not point to variavle environment