/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';
document.addEventListener(`DOMContentLoaded`, () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(`.promo__adv`),
        promo = document.querySelector(`.promo`),
        genre = promo.querySelector(`.promo__genre`),
        addForm = promo.querySelector(`.add`),
        addButton = addForm.querySelector(`button`),
        addInput = addForm.querySelector(`.adding__input`),
        movieList = promo.querySelector(`.promo__interactive-list`),
        promoBG = promo.querySelector(`.promo__bg`),
        checkbox = promo.querySelector(`[type="checkbox"]`);



    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = `DRAMA`;

    addButton.addEventListener(`click`, (event) => {
        //no reload on click
        event.preventDefault();
        
        //add film to DB
        if (addInput.value.trim() !== ``) {
            movieDB.movies.push(addInput.value);

            if (checkbox.checked == true) {
                console.log(`"Добавляем любимый фильм "`, addInput.value);
            }
        }
        checkbox.checked = false;
        addInput.value = ``;

        movieList.innerHTML = '';
        movieDB.movies.sort();

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML +=
                `<li class="promo__interactive-item">${i + 1} ${film} 
                <div class="delete"></div>
                </li>`;
        });
        console.log(`==>`, genre, `\nof promo = `, promo, `\nDB: `, movieDB.movies);

    });
    //VARIANT 2    
    // addForm.addEventListener(`submit`, (event) => {
    //     event.preventDefault();

    //     movieList.innerHTML = '';
    //     movieDB.movies.sort();
    //     movieDB.movies.forEach((film, i) => {
    //         movieList.innerHTML +=
    //             `<li class="promo__interactive-item">${i + 1} ${film} 
    //             <div class="delete"></div>
    //             </li>`;
    //     });
    //     console.log(`==>`, genre, `\nof promo = `, promo, `\nDB: `, movieDB.movies);
    // });


    let url = "img/bg.jpg";
    promoBG.style.backgroundImage = `url(${url})`;

});

