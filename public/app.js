import { Invoice } from './Classes/Invoice.js';
import { ListTemplate } from './Classes/ListTemplate.js';
import { Payment } from './Classes/Payment.js';
// We want the object to be created based on their type : Invoice / Payment based on what user selects & 
// they should get stored in accordance to their classes (Invoice / Payment).
// Extracting the DOM elements in variables like Jquery / JS.
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Tuples are built-in types, that are little bit like arrays as we can use array methods but there's one
// major difference : Types of data in eah position in a tuple is fixed once it has been initialised.
let arr = ['Ryuk', 'Shinigami', 25, true]; //mixed array
arr[0] = false; //allowed
// Any position in array can be of any type that it contains during it's specification.
arr[2] = 'Mario'; //allowed
// Tuples do not allow such type changes.
let tup = ['Ryuk', 22, true];
// tup[0] = false ; //not allowed 
tup[0] = 'Ken'; //allowed
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    // 1. Using arrays to get rid of the parameters redundancy : 
    // toFrom.value, details.value, amount.valueAsNumber. This fails!
    // 2. Use Tuples to ensure the specific types to be enforced on the parameters.
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        // doc = new Invoice(...values); 
        //error as using arrays we can't specify the specific types being passed in parameters 
        // as expected by the constructor. hence, commenting.
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        //now it works, as values is a tuple now. 
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values); //now it works, as values is a tuple now. 
    }
    // console.log(doc);
    // Render the element on the screen instead of consoling.
    // Acquire the ul from the HTML.
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    // list.render(doc,type.value,'end');
    list.render(doc, type.value, 'start');
});
