/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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


movieList.innerHTML = '';

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
