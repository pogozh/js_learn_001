'use strict';

const box = document.getElementById(`box`);
const btns = document.getElementsByTagName(`button`);
const wrapper = document.querySelector(`.wrapper`);
const circles = document.getElementsByClassName(`circle`);
const hearts = wrapper.querySelectorAll(`.heart`);
const heart = wrapper.querySelector(`.heart`);


console.log(hearts);
hearts.forEach(item=>{
    console.log(item);
});
console.log(hearts);
hearts.forEach(item=>{
    console.log(item);
});
console.log(`---`);
box.style.backgroundColor = `green`;
box.style.width = `500px`;
const num = 181;
box.style.cssText = `background-color: purple; width: ${num}px;`;

btns[1].style.borderRadius = `35%`;
circles[1].style.backgroundColor = `red`;

// for (let i = 0; i < hearts.length; ++i) {
//     hearts[i].style.backgroundColor = `blue`;
// }

hearts.forEach(item => {
    item.style.backgroundColor = `purple`;
});

const div = document.createElement(`div`);
// const test = document.createTextNode(`Тут был я`);

 div.classList.add(`black`);
//  document.body.append(div);
 wrapper.append(div);
// wrapper.appendChild(div); //old style!
//  wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //old style
// circles[0].remove();
// wrapper.removeChild(hearts[1]); // old style
// hearts[0].replaceWith(circles[1]);
// wrapper.replaceChild(circles[0], hearts[2]);

const userText  = `Hellol`;
div.innerHTML = `<h1>${userText}</h1>`;
// div.textContent = `world`;

div.insertAdjacentHTML(`beforeend` ,`<h2>world</h2>`);