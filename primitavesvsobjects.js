let age = 30;
let oldAge = age; //at this point age is 30
age = 31;
console.log(age); //31
console.log(oldAge);//30


//object me
const me = {
    name: 'Nez',
    age: 30;
};

//set friend equal to object name and age the same

const friend = me;

friend.age = 27;
//change friend age

console.log('Friend:', friend);
console.log('Me', me);

//will age the age of the me object too

//primatives 
//number string boolean undefined null symbol bigint

//reference types object literal array functions more
//javascript engine has two compnents 

//call stack and heap
//call stack functions executed functions stores in heap because reference types

//primative types are stored in call stack


//primate value example

let age = 30;
let oldAge = 31;
age = 31;
console.log(age); //31
console.log(oldAge); //30


declare variavle age = 30;
//javascript will create so called unique identifier with variable name 
//memory with certain address will be allocated like 0001 value will be stored in specific address
//30 will be specified with memory address 0001 
//idetifier points to address not value itself
//age equal to memoery address 0001
//oldAge when declared will point to same address as age variavble 
//when setting age to 31 value at address 0001 WONT become 31 that would change old age as well
//value at memory address is immutable
//new piece of memoery is created 0002 and age variable points to that new address which is holding new value 31


//reference values thiings work differently
//object stored in the heap
//memory address then the value itself
//memoery address 0003
const me = {
    name: 'Nez',
    age: 30
};

//me doesn't point directly to memory address in the heap
///me points to new piece of memory address in the stack and this memory address will point to the object in object heap by using the memory address as value so value = memory address in the heap'reference types'
//objects may be too big to be stores in stack so stored in the heap

const friend = me;
friend.age = 27;

//friend identifier will point to 'me' identifier but address contains refernece which points to reference itself

console.log('Friend');

console.log('Me;', me);

//even though friend variable is constant can still maipulate it not changing value at memoery identifier 0003
//just changing value in heap










