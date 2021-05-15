// Interfaces allow us to enforce a certain structure of a class / an object.
// Interface -> only declaration of methods & properties, but not the implementation. 
// It is the responsibility of the class / object that implements the interface by providing implementation
// for all members of the interface.
import { Invoice } from './Classes/Invoice.js';
import { Payment } from './Classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'Web work', 200);
docTwo = new Payment('Mario', 'Plumbing work', 400);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("printing docs : ");
console.log(docs);
// We want the object to be created based on their type : Invoice / Payment based on what user selects & 
// they should get stored in accordance to their classes (Invoice / Payment).
// Extracting the DOM elements in variables like Jquery / JS.
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// Interfaces can extend another interface / multiple interfaces.
// Interfaces can extend classes too!
