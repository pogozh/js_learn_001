'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)
console.log(block?.textContent);
// block?.textContent = `123`; // wrong
console.log(2 + 9);

const userData = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    say: function () {
        console.log(`-_- `, this.name);
    }
}
userData.say();
userData.hay?.();

// if (userData.name && userData.skils && userData.skils.js) {

// }
console.log(`result:`, userData?.skils?.js);