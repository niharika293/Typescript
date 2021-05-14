"use strict";
// Classes are similar to JavaScript here!
// A class is a blue-print for an object. 
// Example : If we want many "invoice" objects, then we can create a class to structure those objects & use accordingly. 
var Invoice = /** @class */ (function () {
    // Error : Property 'client' has no initializer and is not definitely assigned in the constructor.ts(2564)
    // Fix - 1 : Assign default value which is not a good fix, as an object can practically hold different values.
    // Fix - 2 : Use constructors, as when a new object is created, they get called and different values can be initialised.
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a; //Error gone!
    }
    Invoice.prototype.format = function () {
        return (this.client + " owes " + this.amount + " for " + this.details);
    };
    return Invoice;
}());
// Instantiate the class = create an object!
var invOne = new Invoice('Mario', 'Save my princess', 700);
var invTwo = new Invoice('Luigi', 'Save Marios princess', 800);
console.log(invOne);
console.log(invTwo);
// Classes can be used with arrays to limit what kind of objects can be added to the arrays.
// let invoices : string[] = [];
var invoices = []; //only object with type Invoice can be added to this array.
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push('Yoshi','Sweeper', 800); //error , use it as an object of invoice, no random values allowed!
console.log(invoices);
// Default properties in class are public. 
invOne.client = 'yoshi';
invTwo.amount = 70;
console.log("invoices after tampering");
console.log(invoices);
// Hence, use access modifiers to protect your code & limit the accessibiltiy of class properties.
