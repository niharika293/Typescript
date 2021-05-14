"use strict";
// Accessing DOM Elements in Type-cript is similar to Javascript.
var anchor = document.querySelector('a');
console.log(anchor); //Returns anchor
// console.log(anchor.href); 
//error : since Typescript doesn't have direct access to the index.html page & it's warning that
//  it can possibly be null.
// Fix - 1. Put ! mark while searching, this means that the developer is certain that there surely exists that element which he's lookng for.
var anchorNew = document.querySelector('a');
console.log(anchorNew.href); //error goes 
// Fix - 2 : Handle Null
if (anchor) {
    console.log(anchor.href); //error goes!!
}
// Typescript contains special types for every DOM Element. 
// finding by class doesn't return any specific type but element type.
//  hence, type-cast it for better code performance.
var form = document.querySelector('.new-item-form');
// Type-casting => We're expliitly defining what type an element would be!
var formNew = document.querySelector('.new-item-form');
console.log("Printing form children : " + formNew.children);
// No need to use ! and Type-casting together.
var type = document.querySelector('select');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
formNew.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber //since Javascript prints number as string, hence use this.
    );
}); // invoice Niharika Designing 500
