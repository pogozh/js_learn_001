// "use strict";
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
  25: 'NumberOne',
};

myFam.Oleg = 1991;
// console.log(myFam['Sergey']);
console.log(myFam[1]);
console.log(myFam['1']);
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
mylength = myFam.mylength;
let maxAge = 0;
console.log('----');
console.log(Object.values(myFam)[0]);

for (i = 0; i < mylength; ++i) {
  console.log(Object.values(myFam)[i]);
  if (i < 3 && Object.values(myFam)[i] < Object.values(myFam)[i+i]) {
    // console.log("inside",myFam[i],"\n");
    maxAge = myFam.values[i];
  }
}
console.log("Oldest famity mamber is X", "|Age is ", 2022 - maxAge, "|burn at", maxAge);

console.log('----');
i = 1;
for (let key in myFam) {

  // console.log(myFam.values[i]);
  console.log(key);
  console.log(Object.values(myFam)[i]);
  console.log(myFam[25]);
  // console.log(myFam.key());
  ++i;
}

let storeName = 'Yarche';
let storeDescription = {
    budget: 10000,
    employees: ['Ivan', 'Vasya', 'Kirill'],
    products: {iphone: 120000, imac: 300000},
    open: true,
};
