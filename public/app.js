"use strict";
// Interfaces allow us to enforce a certain structure of a class / an object.
// An object using the type as interface. 
const me = {
    name: 'Mario',
    age: 35,
    speak(text) {
        console.log("Speaks : " + text + "and spends : ");
    },
    spend(amount) {
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log("Hello " + person.name);
};
greetPerson(me);
