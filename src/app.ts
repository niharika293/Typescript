// Interfaces allow us to enforce a certain structure of a class / an object.

// Interface -> only declaration of methods & properties, but not the implementation. 
// It is the responsibility of the class / object that implements the interface by providing implementation
// for all members of the interface.

interface IsPerson{
    name : string;
    age : number;
    speak(a : string) : void;
    spend(a : number) : number;
} //only declare here

// An object using the type as interface. 
const me : IsPerson = {
    name : 'Mario',
    age : 35,
    speak(text : string) : void{
        console.log("Speaks : " + text + "and spends : ");
    },
    spend(amount : number) : number{
        return amount;
    }
}

console.log(me);

const greetPerson = (person : IsPerson) => {
    console.log("Hello " + person.name);
}

greetPerson(me);

