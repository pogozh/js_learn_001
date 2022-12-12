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

_____
console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // NAn
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // 0 false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true

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

// ***_______________________***
// Место для первой задачи
function sayHello(answer) {
  answer = "Привет, " + answer + "!"
  return answer;
}

console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
  const arr = [num - 1, num, num + 1];
  return arr;
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(num, quantity) {
  if (typeof (quantity) != 'number' || quantity < 1)
    return num;

  let temp = num;
  let retValue = "" + num;
  for (let i = 1; i < quantity; ++i) {
    temp += num;
    retValue += '---' + temp;
  }
  return retValue;

}

console.log(getMathResult(5, '6'));
console.log(getMathResult(5, 0));
console.log(getMathResult(5, -78));
console.log(getMathResult(5, -7.8));
console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));