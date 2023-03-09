"use strict";
// a = 15;
// console.log(a);

let country = {
  name: "Netherlands",
  population: 3.14159265358979323846
};

country.capital = "Amsterdam";

console.log(country.name);
console.log(country.capital);
console.log(country.population);
delete country.population;

const input = 'Tsar';
console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

// use input() + to get the user's output

console.log(-3 / 0);

const myFam = {
  Albina: 1987,
  Sergey: 1984,
  Polina: 2013,
  Natalya: 1963,
  25: 2025,
};

myFam.Oleg = 1991;
console.log('0----');
console.log(myFam[1]);
// console.log("-->", myFam['Sergey']); // workes but warrior
console.log(myFam.Oleg);
let keys = Object.keys(myFam);
console.log(keys);
console.log(keys[0]);
console.log(keys[1]);
console.log(myFam[keys[1]]);
console.log(Object.keys(myFam)[1]);
console.log(Object.values(myFam)[1]);

let i;
let mylength = Object.keys(myFam).length;
let maxAge = Object.values(myFam)[0];
console.log('1----');
console.log("lenght ", mylength);
console.log("-> ", Object.keys(myFam)[4].length);


for (i = 0; i < mylength; ++i) {
  console.log(Object.values(myFam)[i]);
  if (i < Object.keys(myFam).length && Object.values(myFam)[i] < maxAge) {
    // console.log("inside", Object.values(myFam)[i]);
    maxAge = Object.values(myFam)[i];
  }
}
console.log("Oldest famity mamber is X", "|Age is ", 2022 - maxAge, "|burn at", maxAge);

console.log('2----');
i = 0;
for (let key in myFam) {

  // console.log(myFam.values[i]);
  console.log(key, myFam[key]);
  // console.log(Object.values(myFam)[i]);
  // console.log(myFam[25]);
  ++i;
}

let storeName = 'Yarche';
let storeDescription = {
  budget: 10000,
  employees: ['Ivan', 'Vasya', 'Kirill'],
  products: { iphone: 120000, imac: 300000 },
  open: true,
};

// 31. Callback- функции

function fist() {
  setTimeout(function () {
    console.log('timeout');
  }, 1200);
}
function second() {
  setTimeout(function () {
    console.log('now');
  }, 0);
}

// fist();
// second();

function learnJS(lang, callback) {
  console.log(`I'm learnin' ${lang}`);
  callback();
}
function done() {
  console.log(`i'v done today \n`);
}

learnJS(`Ruby`, done);

// 32. Объекты, деструктуризация объектов (ES6)

const options = {
  name: 'test01',
  width: 1024,
  height: 1050,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    console.log(`options test properties = ${optionsRecursion(options)}`);
  },
};

console.log(options);
// delete (options.colors.bg);
console.log('\n');

function optionsWithoutRecursion() {
  for (let key in options) {
    if (typeof (options[key]) === 'object') {
      console.log(`subobject ${key} has:`);
      for (let key1 in options[key]) {
        console.log(`..property ${key1} have value ${options[key][key1]}`);
      }
    } else {
      console.log(`property ${key} have value ${options[key]}`);
    }
  }
}

function optionsRecursion(options, shift = '', counter = 0) {
  for (let key in options) {
    if (typeof (options[key]) === 'object') {
      console.log(`subobject ${key} has:`);
      counter += optionsRecursion(options[key], '->', 0);
    } else {
      console.log(`${shift}property ${key} have value ${options[key]}`);
      ++counter;
    }
  }
  return counter;
}

// console.log(`Properties count = `, optionsRecursion(options),` Main properties =`, Object.keys(options).length);
options.makeTest();
const { border, bg } = options.colors;
console.log(border, bg);

// 33. Массивы и псевдомассивы
const arr = [2, 4, 6, 8, `sd`];
arr.forEach(function (item, i, arr) {
  console.log(`Element №${i} - ${item} form [${arr}] `);
}
);

// 35. Передача по ссылке, поверхностное и глубокое копирования

const or = 'obj';
let originObject01 = {
  a: 1,
  b: 2,
  c: { x: 3, y: 4, z: { xx: 5, yy: 6 } },
  d: `done ${or}`,
};

let copyObject01 = Object.assign({}, originObject01); // Deep coping ?, no! The Same!
// Object.assign(copyObject01, originObject01); // Поверхностие копирование
console.log(`O`, originObject01);
console.log(`C`, copyObject01);
copyObject01.a = 200;
console.log(`O`, originObject01);
console.log(`C`, copyObject01);

// ___
const video = [`youube`, `vimeo`, `redtube`],
  blog = [`livejournal`, `blogger`, `tweeter`],
  internet = [...video, ...blog, `facebook`, `insta`];
console.log(internet);
console.log(...arr);

function log(a) { console.log(...a); }

log(arr);
let copyObject02 = { ...originObject01 };
copyObject02.a = `www`;
console.log(`O`, originObject01);
console.log(`C`, copyObject02);

// 36. Основы ООП, прототипно-ориентированное наследование

let solder = {
  health: 400,
  armor: 100,
  agility: 7,
  sayHello: function () { return `Hello from solder`; },
};

let jonh = {
  health: 100,
  armor: 50,
};

// jonh.__proto__ = solder;
Object.setPrototypeOf(jonh, solder);

let smith = Object.create(solder);

console.log(jonh, ` proto `, jonh.agility);
console.log(jonh.sayHello());
console.log(`smith says: `, smith.sayHello());

const test = `            EPIC   `;
console.log(test.trim());

// 40  Области видимости и выполнения

let globa = 'Foo';
function outside() {
  let ret = '';
  function inside() {
    ret += globa;
    return ret;
  }
  return inside;
}

let vari = outside();

// console.log(vari(`Bar`));
// console.log(vari(`Bar`));
// console.log(vari(`Rab`));
// console.log(vari(`AAA`));
console.log(vari());
console.log(vari());
console.log(vari());
console.log(vari());

// const getSum = function(a, b) {
//   return a + b;
// };
// const result = getSum(5, 6);
console.log(typeof (NaN));

function foo(a, b) {
  const [ss, zz] = a;
  const { eng } = b;

  return `${ss} ${zz} ${eng}`;
}

const result = foo([`www`, 'Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
console.log(result);

// Пути создания IIFE

(function () {
  console.log("Скобки вокруг функции");
})();

(function () {
  console.log("Скобки вокруг всего");
}());

!function () {
  console.log("Выражение начинается c логического оператора NOT");
}();

+function () {
  console.log("Выражение начинается c унарного плюса");
}();

function sum(a) {
  return function (b) {
    return (a + b);
  };
}

let sumRes = sum();
// console.log(sum(5)(6));

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arrr0 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrr0.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}


// let arr01 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr01.filter(inArray([3, 4, 5, 11]))); // 3,4,5,6
// {
//   let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

//   function byField(field) {
//     return (a, b) =>
//       a[field] > b[field] ? 1 : -1; debugger
//   }

//   users.sort(byField('name')); debugger
//   users.forEach(user => console.log(user.name)); debugger // Ann, John, Pete debugger

//   users.sort(byField('age')); debugger
//   users.forEach(user => console.log(user.name)); debugger // Pete, Ann, Johndebugger
// }

// Section 2-41
// console.log(typeof ([] + false - null + true));
// console.log([] + 1 + 2);
// console.log("1"[0]);

// function pow1(x, n) {
//   if (n < 0) { return `error`; }
//   if (n === 1) { return x; }
//   else { return x *= pow1(x, n - 1); }
// }

// let x = 5;
// let n = 3;
// console.log(`->`, x, `^`, x, ` = `, pow1(x, n));

let students = {
  js: [{
    name: `jonh`,
    progress: 100,
  }, {
    name: `Ivan`,
    progress: 60,
  }],
  html: {
    basic: [{
      name: `Peter`,
      progress: 20,
    }, {
      name: `Ann`,
      progress: 18,
    }],
    pro: [{
      name: `Sam`,
      progress: 10,
    }],
    semi: {
      students: [{
        name: test,
        progress: 100,
      }]

    }
  }
};

console.log(getTotalProgressByItaration(students));

function getTotalProgressByItaration(data) {
  let total = 0;
  let students = 0;
  console.log(Object.values(data));

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; ++i) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; ++i) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total / students;
}




const res = getTotalProgressByRecursion(students);
console.log(res[0] / res[1]);

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let totalArr = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      totalArr[0] += subDataArr[0];
      totalArr[1] += subDataArr[1];
    }
    return totalArr;
  }
}

function factorial(n) {
  if (typeof (n) !== 'number' || !Number.isInteger(n)) { return `Error`; }
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
}
console.log(factorial(5.5));

// 0+1-2+3-4-5 6 7 8 9
// 0 +1 + 9 - 2 - 8 + (3 + 7 -5 -4 +6) 

let sum1 = 0 - 1 - 2 - 3 - 4 - 5 + 6 - 7 + 8 + 9;
let sum2 = 0 + 1 + 2 + 3 + 4 + 5 + 6;
let a = 0;

console.log(`Сумма = `, sum2, sum1);

// let b = 12 - 3 = 15 -3 -3;


console / log(`--Rome--`);
const map = { I: 1, V: 5, X: 10 };

function convertRom(str) {
  let sum = 0,
    prevNum = 0;
  for (let pos in str) {
    let curNum = map[`${str.at(pos)}`];
    if (prevNum >= curNum) { sum += curNum; }
    else { sum += curNum - (prevNum * 2) }
    prevNum = curNum;
  }
  return sum;
}
console.log(convertRom(`VIIIX`));

let name1 = null;
let name2 = `Sasha`;

console.log(name1 ?? name2 ?? `Petr`);

function narcissistic(value) {
  // Code me to return true or false
  let array = [...value.toString()].map(Number);
  let result = 0;
  for (let i = 0; i < array.length; ++i) {
    result += Math.pow(array[i], array.length);
  }
  return result == value;
}
// console.log(result);
// console.log(value);

console.log(narcissistic(153));
