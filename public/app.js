// Access Modifiers : How a user can access different propertiess of a class.
// 3 types : public, private, read-only.
// By default all properties of class are public.
// private : access allowed for usage inside the class only, but not outside in any way!
// readonly : we can read this from either inside / outside the class but can't change it from either.
// Short-hand for defining properties inside the constructor. This only works when we're using access modifiers,
// error if no access modifiers are present!
// Parameters can be deifned inside the parantheses of the constructor & they're initialised when invoking the constructors.
// In import, ts file is not going to be used, since ts gets compiled to js & browsers understand js.
import { Invoice } from './Classes/Invoice.js';
// Instantiate the class = create an object!
const invOne = new Invoice('Mario', 'Save my princess', 700);
const invTwo = new Invoice('Luigi', 'Save Marios princess', 800);
let invoices = []; //only object with type Invoice can be added to this array.
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push('Yoshi','Sweeper', 800); //error , use it as an object of invoice, no random values allowed!
invoices.forEach(inv => {
    console.log("looping inside invoices : ");
    // console.log(inv.client , inv.details, inv.amount, inv.format()); //error : since -> amount = private.
    console.log(inv.client, inv.details, inv.format()); //error : since -> amount = private.
});
// Drawbacks of Module :
// 1. Only modern browsers use the module system.
// 2. It doesnt bundle our code into a single file & the browser is also using a module system to load
// separate files & make different requests.
// After compilation, Classes folder will be created inside Public.
// To combat above issues, Use "webpack", hence only 1 network request will be created & all browsers will be supported.
