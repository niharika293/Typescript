"use strict";
// Access Modifiers : How a user can access different propertiess of a class.
// 3 types : public, private, read-only.
// By default all properties of class are public.
// private : access allowed for usage inside the class only, but not outside in any way!
// readonly : we can read this from either inside / outside the class but can't change it from either.
// Short-hand for defining properties inside the constructor. This only works when we're using access modifiers,
// error if no access modifiers are present!
// Parameters can be deifned inside the parantheses of the constructor & they're initialised when invoking the constructors.
var Invoice = /** @class */ (function () {
    function Invoice(client, // default - public
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.details = 'something else' ; //error since readonly!
        return (this.client + " owes " + this.amount + " for " + this.details);
    };
    return Invoice;
}());
// Instantiate the class = create an object!
var invOne = new Invoice('Mario', 'Save my princess', 700);
var invTwo = new Invoice('Luigi', 'Save Marios princess', 800);
var invoices = []; //only object with type Invoice can be added to this array.
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push('Yoshi','Sweeper', 800); //error , use it as an object of invoice, no random values allowed!
invoices.forEach(function (inv) {
    console.log("looping inside invoices : ");
    // console.log(inv.client , inv.details, inv.amount, inv.format()); //error : since -> amount = private.
    console.log(inv.client, inv.details, inv.format()); //error : since -> amount = private.
});
