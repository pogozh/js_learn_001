"use strict";


console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // NAn
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // 0 false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true


// {
//   {

//     const arrayOfNumbers = [];
//     for (let i = 5; i < 11; ++i) {
//       arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);

//   }


// Место для третьей задачи
function getMathResult(num, quantity) {
  if (typeof (quantity) != 'number' || quantity < 1) {
    return num;
  }
  let temp = num;
  let retValue = "" + num;
  for (let i = 1; i < quantity; ++i) {
    temp += num;
    retValue += '---' + temp;
  }
  return retValue;

}

// console.log(getMathResult(5, '6'));
// console.log(getMathResult(5, 0));
// console.log(getMathResult(5, -78));
// console.log(getMathResult(5, -7.8));
// console.log(getMathResult(5, 3));
// console.log(getMathResult(3, 10));


// ---

{
  let str = 'tester is the best guy ever';
  console.log(str.toUpperCase(''));
  console.log(str.indexOf('r'));
  console.log(str.slice(-13, -5));
  console.log(str.search('st'));
  console.log(str.substring(7));
  console.log(str.substr(7, 5));
  const num = 12.2;
  console.log(Math.round(num));
}

// Coding Exercise 7: (*) Продвинутые задания на использование функций
function calculateVolumeAndArea(r) {
  let retValue = 'При вычислении произошла ошибка';
  if (r > 0 && parseInt(r) === r) {
    retValue = 'Объем куба: ' + r * r * r + ', площадь всей поверхности: ' + r * r * 6;
  }
  return retValue;
}

console.log(calculateVolumeAndArea(5.5));
console.log(calculateVolumeAndArea(15));

// Место для второй задачи
function getCoupeNumber(num) {
  if (isNaN(num) || num < 0 || parseInt(num) != num) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
  if (num === 0 || num > 36) {
    return 'Таких мест в вагоне не существует';
  }

  return parseInt(num / 4) + 1;
}

// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(4));
// console.log(getCoupeNumber(36));
// console.log(getCoupeNumber(-5));
// console.log(getCoupeNumber(5.7));
// console.log(getCoupeNumber(0));

/*
Создайте функцию, которая принимает в себя целое число минут 
и возвращает время в нужном формате строки. (Смотри пример). 
Обратите внимание на окончание слова "час" - оно меняется в 
зависимости от цифры. Если вместо аргумента приходит не число,
 дробное или отрицательное число - функция возвращает строку 
 "Ошибка, проверьте данные" Внимание! Давайте пока ограничимся 
 максимум 600ю минутами (10 часов). Так как проверки на большие
  числа будут раздувать код 
(33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код
 будет проверять именно этот промежуток (1 - 10 часов). Но вы 
можете реализовать и полный скрипт, он тоже должен проходить тесты.
Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
*/
function getTimeFromMinutes(num) {
  if (isNaN(num) || num < 0 || parseInt(num) != num) {
    return 'Ошибка, проверьте данные';
  }
  const minuts = num % 60;
  const hours = (num - minuts) / 60;
  let hEnd = 'ов';
  let mEnd = '';
  const hA = [2, 3, 4];
  let key;
  const hLastDigit = hours % 10;
  if (hLastDigit === 1 && hours !== 11) {
    hEnd = '';
  } else {
    for (key in hA) {
      if (hours == hA[key]) {
        hEnd = 'а';
      }
    }
  }

  const mLastDigit = (minuts % 10);
  if (mLastDigit === 1 && minuts !== 11) {
    mEnd = 'а';
  } else {
    const mbl = [2, 3, 4];
    for (key in mbl) {
      if (mLastDigit === mbl[key]) {
        mEnd = 'ы';
      }
    }
  }
  return `Это ${hours} час${hEnd} и ${minuts} минут${mEnd}`;
}
// {
// console.log(getTimeFromMinutes(1));
// console.log(getTimeFromMinutes(61));
// console.log(getTimeFromMinutes(1));
// console.log(getTimeFromMinutes(124));
// console.log(getTimeFromMinutes(246));
// console.log(getTimeFromMinutes(-5));
// console.log(getTimeFromMinutes(5.7));
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(572));
// console.log(getTimeFromMinutes(671));
// console.log(getTimeFromMinutes(11));
// console.log(getTimeFromMinutes(681));
// }

/*
Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0
*/
// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  if (arguments.length < 4) {
    return 0;
  }
  let key;
  for (key in arguments) {
    if (isNaN(arguments[key]) || typeof (arguments[key]) !== 'number') {
      return 0;
    }
  }
  return Math.max(a, b, c, d);
}

// console.log(findMaxNumber(1, 2, 3, 4));
// console.log(findMaxNumber(1, 2.6, 4, 3));
// console.log(findMaxNumber(100, 20, 3, .4));
// console.log(findMaxNumber(-1, -2, -3, -4));
// console.log(findMaxNumber(1, 2, -3.0012, 3));
// console.log(findMaxNumber(1, 2, -3.0012));
// console.log(findMaxNumber(1, 2, NaN, 3));
// console.log(findMaxNumber(1, 5, '6', '10'));
// console.log(findMaxNumber(1, 5, 6.6, 11));

/*
Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
 Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"
*/

function fib(size) {
  let strFib = '0';
  let arr = [0, 1];
  if (!Number.isInteger(size) || size <= 0) {
    return '-';
  }
  for (let i = 0; i < size - 1; ++i) {
    strFib += ` ${arr[1]}`;
    arr.splice(0, 1, arr[1], (arr[0] + arr[1]));
    delete(arr[2]);
  }
  return strFib;
}

console.log(fib(5));
console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));
console.log(fib(0.5));