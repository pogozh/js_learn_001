'use strict';

const boxQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log(`This One \n`, box);
        console.log(box);
    }
})

console.log(boxQuery[0].closest(`.wrapper`)); // Finds the closest parent element that matches the selector.

if (0) {
    // boxQuery[0].remove();
    // boxesGet[0].remove();
    for (let i = 0; i < 5; ++i) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '50px';
        newDiv.style.height = '50px';

        newDiv.classList.add('box');
        document.body.append(newDiv);
        // console.log(newDiv);
    }

    console.log(boxQuery);
    console.log(boxesGet);
    console.log(document.body.children);
    console.log(Array.from(boxesGet));
}