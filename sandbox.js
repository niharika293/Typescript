// Any  : At any point of time, it can change its typpe.
var age = 25;
age = 'ryuk'; //allowed.
age = false; //allowed.
console.log(' Age : ' + age); //false
var mixed = [];
mixed.push('luigi');
mixed.push(88);
console.log("Mixed : " + mixed); //Mixed : luigi,88
// Defining type of Ninja Object.
// Error : 'any' only refers to a type, but is being used as a value here.
// let ninja = {
//     name : any,
//     age : any
// }
// Use colon to get rid of this error as we're declaring a type of ninja object & not assigning values.
var ninja;
ninja = { name: 'yoshi', age: 25 };
ninja = { name: 25, age: 'yoshi' };
console.log('Ninja is ' + ninja);
// Any can cause major errors regarding types if not used with caution, as it rips out the heart of 
// type-script for which it is being used in the first place.
