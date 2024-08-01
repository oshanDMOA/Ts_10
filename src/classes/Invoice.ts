export class Invoice {

constructor (

    readonly client : string,
    private details:string,
    public amount : number,

){}

 format() {
     return `Invoice for ${this.client} for ${this.details} for ${this.amount}`;
 }
 }