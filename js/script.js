"use strict";

// 1) Первую часть задания повторить по уроку
let numberOfFilms = 7;

// console.log("-->", numberOfFilms);
//2
let personalMovieDB = {
  count: numberOfFilms,
  movies: { a: 8, bob: 9 },
  actors: {},
  genres: [],
  private: false,
};

function writeYourGenres() {
  for (let i = 0; i < 3; ++i) {
    while (personalMovieDB.genres[i] === '' || typeof (personalMovieDB.genres[i]) != 'string') {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
    }
  }
}

// writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

// showMyDB(personalMovieDB.private);

function start() {
  numberOfFilms = '';
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies did U watch?', '');
  }
}

// start();
// console.log(Object.entries(personalMovieDB));

let movie,
  score = 0;


function rememberMyFilms() {
  let movie = '',
    score = -1,
    messege = '';
  for (let i = 0; i < 2; ++i) {
    movie = '';
    score = -1;
    messege = (i + 1) + '-й из просмотренных фильмов?';
    while (movie === null || movie === '' || movie.length > 50) {
      movie = prompt(messege, '').trim();
    }
    while (score == null || isNaN(score) || typeof (score) !== 'number' || score < 1) {
      score = +prompt('Ha сколько оцените ero?', '');
    }

    personalMovieDB.movies[movie] = score;
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  console.log('count - ', personalMovieDB.count);
  if (personalMovieDB.count < 10) {
    console.log("Malo");
    alert('Malo');
  } else {
    console.log('Too match');
    alert('Too match!');
  }
}

// detectPersonalLevel();

// console.log(Object.entries(personalMovieDB.movies));

const str =  `4, 2 , 7, u, -- els, ewr, 67`;
// prompt('str->?array','');
let arr =  str.split(`,`);
arr = arr.sort();
console.log(arr.join(`;` ));