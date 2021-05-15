"use strict";
//  Generics : allow us to create reusable blocks of code which can be used with different types.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 10);
    // obj -> Rest Notation, returns any no. of parameters supplied to the ().
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 25 });
console.log(docOne);
// console.log(docOne.name); //error as properties of docOne are not captured by obj.
// get rid of this error by using Generics.
// T can be any letter, prefer T. 
// T captures the items / properties being passed to the () or object.
const addUIDNew = (obj) => {
    let uid = Math.floor(Math.random() * 10);
    // obj -> Rest Notation, returns any no. of parameters supplied to the ().
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUIDNew({ name: 'mario', age: 35 });
console.log(docTwo);
console.log(docTwo.name); //error goes!
let docThree = addUIDNew('hello'); //allowed as strings are also treated as objects but bad practice
console.log(docThree); //{0: "h", 1: "e", 2: "l", 3: "l", 4: "o", uid: 1}
// Restrict the generic to use only objects. use keyword extends
const addUIDNewRestrict = (obj) => {
    let uid = Math.floor(Math.random() * 10);
    // obj -> Rest Notation, returns any no. of parameters supplied to the ().
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docFour = addUIDNewRestrict('hello'); // error 
// Restrict to have the name property.
// Extra properties are allowed!
const addUIDNewRestrictNew = (obj) => {
    let uid = Math.floor(Math.random() * 10);
    // obj -> Rest Notation, returns any no. of parameters supplied to the ().
    return Object.assign(Object.assign({}, obj), { uid });
};
let docFive = addUIDNewRestrictNew({ name: 'Luigi', age: 55 });
// let docSix = addUIDNewRestrictNew({ age : 55}); //error since name property is missing.
console.log(docFive);
const docSeven = {
    uid: 5,
    resourceName: 'Grocery Shopping!',
    data: ['Milk', 'Butter', 'Bread']
};
console.log(docSeven);
