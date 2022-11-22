"use strict";

// let numberOfFilms = readInt("sdf");

//1
const numberOfFilms = +prompt('How many Films you have watched ?', '');
// let numberOfFilms = 34;
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

//3
const lastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
  lastMovieScore1 = +prompt('На сколько оцените его?', ''),
  lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
  lastMovieScore2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = lastMovieScore1;
personalMovieDB.movies[lastMovie2] = lastMovieScore2;
// console.log(Object.entries(personalMovieDB.movies));
console.log(Object.entries(personalMovieDB.movies));



let storeName = 'Yarche';
let storeDescription = {
  budget: 10000,
  employees: ['Ivan', 'Vasya', 'Kirill'],
  products: { iphone: 120000, imac: 300000 },
  open: true,
};