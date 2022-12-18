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
let copyObject02 = {...originObject01};
copyObject02.a = `www`;
console.log(`O`, originObject01);
console.log(`C`, copyObject02);
