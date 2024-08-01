
interface ISPerson{
    name: string;
    age: number;
    speak(a:string): void;
    spend(a:number): number;
}

const me: ISPerson = {
    name: 'khan',
    age: 30,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
        console.log('i spent', amount);
      return amount;
    },
  };

  const greetPerson  = (person : ISPerson) => {
    console.log('Hello,', + person.name);
  }

import { Invoice } from './classes/Invoice.js';

 const invOne = new Invoice ('oshan','work on the nipun website',2500);
 const invTwo = new Invoice (`amila`,'work on the nipun website',5600);

let invoices : Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
     console.log(inv.client,inv.amount,inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement ;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement ;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement ;
const details = document.querySelector('#details') as HTMLInputElement ;
const amount = document.querySelector('#amount') as HTMLInputElement ;

form.addEventListener('submit',(e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})