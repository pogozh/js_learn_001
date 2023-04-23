"use strict";

const
    btns = document.querySelectorAll(`button`),
    wrapper = document.querySelector(`.btn-block`);

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[2].classList.add(`red`, `addednewone`));
// btns[3].classList.remove(`seven`);
// //remove class if it exists, add class if it doesn't
// btns[0].classList.toggle(`blue`);

// if (btns[1].classList.contains(`one`)) {

//     console.log(btns[1].classList.contains(`one`), `class is already`);
// }

// remove or add color class if it exists
btns[0].addEventListener(`click`, () => {
    // if (!btns[1].classList.contains(`green`)) {
    //     btns[1].classList.add(`green`);
    // } else {
    //     btns[1].classList.remove(`green`);
    // }
    btns[1].classList.toggle(`green`);
});

//dont use that!
// console.log(btns[1].className);

wrapper.addEventListener(`click`, (event) => {
    // console.dir(event.target);
    if (event.target && event.target.tagName === `BUTTON`) {
        console.log(`Batton clicked`);
    }
    if (event.target && event.target.classList.contains(`seven`)) {
        console.log(`Batton class seven clicked`);
    }
    if (event.target && event.target.matches(`button.one`)) {
        console.log(`Matches class ONE clicked`);
    }
});


// btns.forEach((btn) => {
//     btn.addEventListener(`click`, () => {
//         console.log(`Button clicked`);
//     });
// });

const btn = document.createElement(`button`);
btn.classList.add(`red`);
wrapper.append(btn);
