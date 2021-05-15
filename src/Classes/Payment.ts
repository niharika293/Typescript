// Modules : For bigger project, it's good to split our code into different modular files.
// example -> file 1 : DOM Interactions, file 2 : DB Ineractions.

// Typescript doesnt compile modules into older versions of Javascript, hence it's recommended to use Modern 
// web-browsers such as Chrome / Fire-fox etc to enjoy full benifits of it!!

import {HasFormatter} from '../Interfaces/HasFormatter'

export class Payment implements HasFormatter {
    constructor(
        public recipient : string, // default - public
        readonly details : string,
        private amount : number,
    ){}

    format(){
        // this.details = 'something else' ; //error since readonly!
        return (`${this.recipient} is owed ${this.amount} for ${this.details}`);
    }    
}

// The class has format() which complies with the interface definition. 