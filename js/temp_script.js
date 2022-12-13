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
  if ( r > 0 && parseInt(r) === r) {
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

  return parseInt(num/4) + 1;
}

console.log(getCoupeNumber(0));
console.log(getCoupeNumber(4));
console.log(getCoupeNumber(36));
console.log(getCoupeNumber(-5));
console.log(getCoupeNumber(5.7));
console.log(getCoupeNumber(0));