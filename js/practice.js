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
    delete (arr[2]);
  }
  return strFib;
}

// console.log(fib(5));
// console.log(fib(4));
// console.log(fib(7));
// console.log(fib('7'));
// console.log(fib(1));
// console.log(fib(0));
// console.log(fib(0.5));


/*
Задачи:
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
 и возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан,
 то возвращается пустая строка. P.S. Для переноса строки используется \n в конце строки.
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать
в себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'
Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре
(большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится. P.S. Дальше по курсу
мы научимся удобно обращаться из метода к самому объекту, в котором он расположен.
Но пока делаем это менее удобным способом)
*/
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs() { // must get object? OMG
    return (`Мне ${this.age} и я владею языками: ${this.skills.languages.join(` `).toUpperCase()}`);
  },
};


function showExperience(plan) {
  return plan.skills.exp;
}

function showProgrammingLangs(plan) {
  let str = '';
  for (let key in plan.skills.programmingLangs) {
    if (key) {
      str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }
  }
  return str;
}

console.log(showExperience(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs());
console.log(showProgrammingLangs(personalPlanPeter));

/*
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти
строки в нижнем регистре.
Пример:
standardizeStrings(favoriteCities)  выведет в консоль
lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах.
В том числе и с разными буквами :) 
Поэтому нам нужно привести строки в один формат для правильной работы.
*/

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const famil = [];

function showFamily(arr) {
  const str = arr.join(` `);
  if (str !== '') {
    return `Семья состоит из: ${arr.join(` `)}`;
  }
  else {
    return `Семья пуста`;
  }
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  // let str = '';
  arr.forEach(key => {
    if (key) {
      // str += `${key.toLowerCase()}\n`;
      console.log(key.toLowerCase());
    }
  });
  // return str;
  return '';
}

console.log(standardizeStrings(favoriteCities));

/*
3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку
и возвращает эту строку в обратном порядке.
Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'
Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить
навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. 
И часть дополнительных вариантов решения мы тоже изучим в течении курса.
*/

const someString = 'This is some strange string';

function reverse(str) {
  if (typeof (str) !== 'string' || str === '') { return 'Ошибка!'; }
  let temp = '';
  //varinat 1
  // for (let i = str.length - 1; i > -1; --i) {
  //   temp += str[i];
  // }
  // return temp;
  // varinat 2
  temp = str.split(``);
  temp = temp.reverse();
  str = temp.join(``);
  return str;
}
// mb str.reverse();
console.log(`reverse:`, reverse(someString));

/*
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков 
в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR']; const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый 
- это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться),
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
Функция возвращает строку в нужном виде.
Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Замтьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies,
 потом additionalCurrencies по порядку
*/


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let arr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
  let str = 'Нет доступных валют';
  arr.forEach(key => {
    if (key !== missingCurr) {
      if (str == 'Нет доступных валют') {
        str = 'Доступные валюты:\n';
      }
      str += `${key}\n`;
    }
  });
  return str;
}

console.log(availableCurr(arr, 'CNY'));

/*Задача:
У вас есть небольшой кусочек данных о торговом центре, 
которые записаны в объекте shoppingMallData. Они содержат массив
с данными о магазинах, где указана длина и ширина помещения; высоту помещения;
стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
Если бюджета хватает для отопления всего объема торгового центра - 
выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина,
умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов,
 высота, бюджет или подставляется вообще другой объект. */

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};

function isBudgetEnough(data) {
  let square = 0;
  data.shops.forEach((item, i) => {
    square += item.width * item.length;
  });
  const volume = square * data.height;
  const rent = volume * data.moneyPer1m3;
  console.log(square, ` `, volume, ` `, rent);
  if (rent > data.budget) { return 'Бюджета недостаточно'; } else {
    return 'Бюджета достаточно';
  }
}

console.log(isBudgetEnough(shoppingMallData));

/*Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh',
'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups,
 которая принимает в себя массив строк. Внутри она сначала сортирует имена по алфавиту.
 Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
 Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами
 и строкой как 4й элемент. */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris',
  'Bernard', 'Takesi', 'Sam', `XXX`];
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris',
//   'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
  arr.sort();
  let returnValue = [[], [], [], `Оставшиеся студенты: `
  ];
  arr.forEach((item, i) => {
    // console.log(`-> `, item, ` `, i);
    if (i >= 0 && i < 3) {
      returnValue[0][i] = item;
    } else
      if (i > 2 && i < 6) {
        returnValue[1][i - 3] = item;
      } else
        if (i > 5 && i <=8 ) {
          returnValue[2][i - 6] = item;
        } else
          if (i === 9) {
            returnValue[3] += item;
          } else if (i > 9) {
            returnValue[3] += `, ${item}`;
          }
  });
  // console.log(arr.length);
  if (arr.length === 9) {
    returnValue[3] += `-`;
  }
  return returnValue;
}

console.log(sortStudentsByGroups(students));