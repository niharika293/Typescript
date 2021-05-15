// Modules : For bigger project, it's good to split our code into different modular files.
// example -> file 1 : DOM Interactions, file 2 : DB Ineractions.
export class Payment {
    constructor(recipient, // default - public
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.details = 'something else' ; //error since readonly!
        return (`${this.recipient} is owed ${this.amount} for ${this.details}`);
    }
}
// The class has format() which complies with the interface definition. 
