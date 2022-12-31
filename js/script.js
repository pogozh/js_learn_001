"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function () {
    this.count = '';
    while (this.count == '' || this.count === null || isNaN(this.count)) {
      this.count = +prompt('How many movies did You watch?', '');
    }
  },

  writeYourGenres: () => {
    for (let i = 0; i < 2; ++i) {
      let genre = ``;
      while (genre === '' || genre == null || typeof (genre) !== 'string') {
        console.log(`Incorrct input\n`);
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      }
      personalMovieDB.genres[i] = genre.trim();
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i + 1} - это ${item}`);
    });
  },

  writeAllGenries: () => {
    let genres = ``;
    while (genres === '' || genres == null || typeof (genres) !== 'string') {
      genres = prompt(`Введите любимые жанры  через запятую`, '').toLowerCase();
    }

    personalMovieDB.genres = genres.split(`, `);
    personalMovieDB.genres.sort();

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i + 1} - это ${item}`);
    });
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(`showing DB:\n`, personalMovieDB);
    }
  },

  rememberMyFilms: function () {
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
      while (score == null || isNaN(score) || typeof (score) !== 'number' || score < 1 || score > 10) {
        score = +prompt('Ha сколько оцените ero?', '');
      }

      personalMovieDB.movies[movie] = score;
    }
  },

  detectPersonalLevel: function () {
    console.log('count - ', this.count);
    if (this.count < 10) {
      console.log(`You don't watch a lot of movies (${this.count}).`);
      alert(`You don't watch a lot of movies (${this.count}).`);
    } else {
      console.log(`you watch too many movies (${this.count})!`);
      alert(`You watch too many movies (${this.count})!`);
    }
  },

  toggleVisibleMyDB: function () {
    this.private = !(this.private);
  },

};

// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// console.log(personalMovieDB.private);
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();



const str = `4,2,7,11,67,5,--,a,z,g`;
// prompt('str->?array','');
let arr = str.split(`,`);
debagger;
arr = arr.sort(comareNumbers);
console.log(arr.join(`;`));

function comareNumbers(a, b) {
  return a - b;
}

let duhovka =  {
deep: 55 ,
wide: 57,
high: 58,
};