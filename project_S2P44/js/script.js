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

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(`.promo__adv`);
const poster = document.querySelector(`.promo__bg`);
const genr = poster.getElementsByClassName(`promo__genre`);
const genre = poster.querySelector(`.promo__genre`);
const mars = document.getElementsByClassName(`promo__bg`);
const movieList = document.querySelector(`.promo__interactive-list`);
const add = document.querySelector(`.add`);
const addButton = add.querySelector(`button`);
const input = document.querySelector(`.adding__input`);

movieList.innerHTML = '';

addButton.addEventListener(`click`, function() {
    // console.log(input.value);
    movieDB.movies.push(input.value);
});



movieDB.movies.sort();
movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML +=
    `<li class="promo__interactive-item">${i+1} ${movie}
    <div class="delete"></div>
    </li>`;
});

genr[0].textContent = 'ДРАМА';
// genre.textContent = '222222';

adv.forEach(item => {
    item.remove();
});
let url = "img/bg.jpg";
mars[0].style.backgroundImage = `url(${url})`;
