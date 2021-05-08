// Supertype of all data types : (Any)
// Built-in / primitive types : number, string, boolean, void, null, undefined.
// User-Defined types : Arrays, enum, classes, interfaces etc.
// Null vs. Undefined.
// 1. The null and undefined cannot be used to reference the data type of a variable. They can only be assigned as values to a variable.
// 2. However, null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined.
var character = 'mario'; //string
var age = 24; //number
var isBlackBelt = false; //boolean
// character = 50; // error : Type 'number' is not assignable to type 'string', since TS -> strict type checking.
character = "Luigi"; //string, no error.
// Typescript has inference, which means it infers the type based on the values we assign it.
// const circle = (diameter) => {
//     return diameter * Math.PI;
// }
//console.log(circle('hello')); //returns Nan.
// illogical, hence assign type to diameter.
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(5)); //returns 15.707963267948966
// Typescript allows us to type-check during development, therefore, less errors in runtime, and cleaner code.
