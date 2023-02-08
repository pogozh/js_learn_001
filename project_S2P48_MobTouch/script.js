//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener(`DOMContentLoaded`, () => {
    const box = document.querySelector(`.box`);


    box.addEventListener(`touchstart`, (event) => {
        event.preventDefault();

        console.log(`start`);
        console.log(`touches`, event.touches);
        console.log(`targettouches`, event.touches);

    });

    box.addEventListener(`touchmove`, (event) => {
        event.preventDefault();

        console.log(`move`, event.targetTouches[0].pageX);
    });

    box.addEventListener(`touchend`, (event) => {
        event.preventDefault();

        console.log(`end`);
    });

    box.addEventListener(`touchenter`, (event) => {
        event.preventDefault();

        console.log(`enter`);
    });

    box.addEventListener(`touchleav`, (event) => {
        event.preventDefault();

        console.log(`leav`);
    });

    box.addEventListener(`touchcancel`, (event) => {
        event.preventDefault();

        console.log(`cancel`);
    });
});

// touches
// targetTouches
// changetTouches
//change for commit

