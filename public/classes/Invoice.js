export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Invoice for ${this.client} for ${this.details} for ${this.amount}`;
    }
}
