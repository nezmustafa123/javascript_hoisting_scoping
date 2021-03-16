//this keyword speacial variable created for every execution context (function )
//teakes value of the owner of the function in which the this keyword is used

//not static depends on how the function is called and its value is assigned when function is actually called
//ways function can be called
//methos this = object that is calling the method method within object


const nez = {
    name: 'Jonas',
    year: 1990,
    calcAge: function() {
        return 2037 - this.year;
    }
};

nez.calcAge();
//this points to nez object