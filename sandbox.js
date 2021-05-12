// Explicit types : Declaring variables but not giving them values.
var character;
var age;
var isLoggedIn;
// age = 'Luigi';  // type error.
// Arrays : 
var ninjas; // Declares ninjas as string array, but the array is not defined. Hence, error in push.
// ninjas.push('Luigi'); //Uncaught TypeError: Cannot read property 'push' of undefined
// Declare this array as empty in order to read properties like push() etc.
ninjas = ['Yoshi', 'ranger'];
ninjas.push('Luigi'); //Now since the array has been defined above, hence no error in push().
console.log("Ninja Array! : " + ninjas);
// Better way -> Using empty arrays.
var ninjasNew = [];
ninjasNew.push('Mario');
console.log("Ninja New Array! : " + ninjasNew);
// Unioun types : Mixed Types allowed.
var mixedArray = [];
mixedArray.push('Mario');
mixedArray.push(7);
// mixedArray.push(true); //type error
console.log("Mixed New Array! : " + mixedArray);
// Unioun types can also be used on numbers, no compulsion to be used for only arrays.
var mixedVariable;
mixedVariable = 'heyyy!';
mixedVariable = 56;
mixedVariable = true;
// mixedVariable = [90,87]; //error
console.log("Mixed new variable : " + mixedVariable);
// Objects : 
// Method -1 : writing 'object'
var ninjaOne;
ninjaOne = {
    name: 'Luigi',
    age: 25
};
// ninjaOne = 'hello'; //type error
ninjaOne = []; //allowed since array is also an object. 
// ninjaOne.test = 'hey';  //error in adding new property
// Method - 2 : 
var ninjaTwo = {
    name: 'Luigi',
    age: 25,
    belt: 'black'
};
// ninjaTwo = []; // not allowed in these case since, the properties have been defined first. 
// ninjaTwo.test = 'hey'; //error in adding new property
// Re-defining 
ninjaTwo = {
    name: 'Luigi',
    age: 25,
    belt: 'black'
};
console.log("Ninja Two : " + ninjaTwo.name, ninjaTwo.age, ninjaTwo.belt);
