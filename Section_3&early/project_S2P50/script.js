'use strict';

let p = document.querySelectorAll(`p`);
console.log('---\n', p);
p[1].textContent = `text is changed`;

// p[0].remove();

event.type = 'click';
const btn01 = document.querySelector(`button`);

btn01.addEventListener(`click`, function (event) {
    event.preventDefault();
    console.log(`=>\n`, event.target);
});

console.log(`------------------\n`);
console.log(`---***---\n`);

// load the script from source
function loadScript(src) {
    const script = document.createElement(`script`);
    script.src = src;
    script.async = false; // async  loading  script is off by default
    script.defer = true;
    document.body.append(script);
}

loadScript(`test.js`);
loadScript(`some.js`);

const elem = document.getElementById(`hi`);
console.log(`e->`, elem);
const elem1 = document.querySelector(`#hi`);
console.log(`e->`, elem1);
const elem2 = document.querySelectorAll(`#hi`);
console.log(`e->`, elem2);