"use strict";

// let numberOfFilms = readInt("sdf");

//1
// const numberOfFilms = +prompt('How many Films you have watched ?', '');
let numberOfFilms = 7;
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

// const lastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
//   lastMovieScore1 = +prompt('На сколько оцените его?', ''),
//   lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
//   lastMovieScore2 = +prompt('На сколько оцените его?', '');
// personalMovieDB.movies[lastMovie1] = lastMovieScore1;
// personalMovieDB.movies[lastMovie2] = lastMovieScore2;
let movie,
  score = 0;
for (let i = 0; i < 2; ++i) {
  movie = prompt('Один из последних просмотренных фильмов?', '');
  score = +prompt('На сколько оцените его?', '');
  if (movie != null && movie != '' && score != null && score != '' && movie.length < 50) {
    personalMovieDB.movies[movie] = score;
  } else {
    --i;
  }
}

console.log('count - ', personalMovieDB.count);
if (personalMovieDB.count < 10) {
  console.log("Malo");
  alert('Malo');
} else {
  console.log('Too match');
  alert('Too match!');
}


// console.log(Object.entries(personalMovieDB.movies));
console.log(Object.entries(personalMovieDB.movies));


//   {

//     let i = 1;
//     while (i < 16) {
//       ++i;
//       if (i % 2 === 0) {
//         continue;
//       } else {
//         console.log(i);
//       }
//     }

//   }

//   function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     // Пишем решение вот тут

//     for (let i = 0; i < arr.length; ++i)
//       result[i] = arr[i];

//     // Не трогаем

//     return result;
//   }


//   // Место для второй задачи
//   function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; ++i) {
//       if (typeof (data[i]) != 'string') {
//         data[i] *= 2;
//       } else {
//         data[i] += " - done";
//       }
//     }

//     // Не трогаем
//     return data;
//   }


//   // Место для третьей задачи
//   function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     dLength = data.length;
//     for (let i = 0; i < dLength; ++i)
//       result[i] = data[dLength - i - 1];

//     // Не трогаем
//     return result;
//   }



//   const newArr = thirdTask();
//   console.log(newArr);


//   const lines = 5;
//   let result = '';
//   // Проверяется именно переменная result, формируйте строку в ней
//   for (let i = 0; i <= lines; ++i) {
//     for (let j = 0; j < lines - i; ++j) {
//       result += ' ';
//     }

//     for (let j = 0; j < i * 2 + 1; ++j) {
//       result += '*';
//     }
//     result += '\n';
//   }
//   // console.log(result);
// }