// const character = 'mario';

// console.log(character);

// // Interaction with DOM using query selectors is possible.

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach((input) => {
//     console.log(input);
// })

// Supertype of all data types : (Any)
// Built-in / primitive types : number, string, boolean, void, null, undefined.
// User-Defined types : Arrays, enum, classes, interfaces etc.

// Null vs. Undefined.
// 1. The null and undefined cannot be used to reference the data type of a variable. They can only be assigned as values to a variable.
// 2. However, null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined.

let character = 'mario'; //string
let age = 24; //number
let isBlackBelt = false; //boolean

// character = 50; // error : Type 'number' is not assignable to type 'string', since TS -> strict type checking.

character = "Luigi"; //string, no error.

// Typescript has inference, which means it infers the type based on the values we assign it.

// const circle = (diameter) => {
//     return diameter * Math.PI;
// }

//console.log(circle('hello')); //returns Nan.
// illogical, hence assign type to diameter.

const circle = (diameter : number) => {
    return diameter * Math.PI;
}

console.log(circle(5)); //returns Nan.

// Typescript allows us to type-check during development, therefore, less errors in runtime, and cleaner code.



