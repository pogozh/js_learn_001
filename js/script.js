"use strict";


//1
// 1) Первую часть задания повторить по уроку
let numberOfFilms = '';

function start() {
  numberOfFilms = '';
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies did U watch?', '');
  }
}

start();
console.log("-->", numberOfFilms);
//2
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(Object.entries(personalMovieDB));


let movie,
  score = 0;


function rememberMyFilms() {
  for (let i = 0; i < 2; ++i) {
    movie = prompt('Один из последних просмотренных фильмов?', '');
    score = +prompt('На сколько оцените его?', '');
    if (movie != null && movie != '' && score != null && score != '' && movie.length < 50) {
      personalMovieDB.movies[movie] = score;
    } else {
      --i;
    }
  }
}

rememberMyFilms();



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

detectPersonalLevel();

// console.log(Object.entries(personalMovieDB.movies));
console.log(Object.entries(personalMovieDB.movies));
