"use strict";

// let numberOfFilms = readInt("sdf");

//  1
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

_____
console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // NAn
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // 0 false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true

// tasks
{

for (let i = 5; i < 11; ++i)
  console.log(i);

}

{
  for (let i = 20; i > 9; --i) {
    console.log(i);
    if (i === 13) break;
  }
}
function thirdTask() {
  for (let i = 2; i < 11; ++i)
    if (i % 2 === 0) console.log(i);
}

{
  for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}

{

  let i = 1;
  while (i < 16) {
    ++i;
    if (i % 2 === 0) continue;
    else console.log(i);
  }

}

{

  const arrayOfNumbers = [];
  for (let i = 5; i < 11; ++i)
    arrayOfNumbers[i - 5] = i;
  console.log(arrayOfNumbers);

}