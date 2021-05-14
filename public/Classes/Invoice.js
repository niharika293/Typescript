// Modules : For bigger project, it's good to split our code into different modular files.
// example -> file 1 : DOM Interactions, file 2 : DB Ineractions.
// Typescript doesnt compile modules into older versions of Javascript, hence it's recommended to use Modern 
// web-browsers such as Chrome / Fire-fox etc to enjoy full benifits of it!!
export class Invoice {
    constructor(client, // default - public
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.details = 'something else' ; //error since readonly!
        return (`${this.client} owes ${this.amount} for ${this.details}`);
    }
}
