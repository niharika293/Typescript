// Modules : For bigger project, it's good to split our code into different modular files.
// example -> file 1 : DOM Interactions, file 2 : DB Ineractions.
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
// The class has format() which complies with the interface definition. 