const me = {
    name: 'khan',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('Hello,', +person.name);
};
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('oshan', 'work on the nipun website', 2500);
const invTwo = new Invoice(`amila`, 'work on the nipun website', 5600);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
