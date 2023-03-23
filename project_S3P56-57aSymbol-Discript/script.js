'use strict';
if (0) {

    let id = Symbol('id');

    const obj = {
        'name': `Test.name`,
        [id]: 1,
        [Symbol(`id`)]: `Test.id`,
        getId: function (obj) { return this[id]; },
    }

    console.log(`-> `, obj.getId(obj));


    obj[id] = 1;

    let id2 = Symbol('id');
    obj[id2] = 3;

    let it = Symbol();
    obj[it] = 2;
    // console.log(`\n`, obj[id], '\n', obj);
    // for (let i in obj) console.log(`\n`, i, `-`, obj[i]);

    // get link to symbols object and show it values

    obj[Object.getOwnPropertySymbols(obj)[2]] = `fuck`;
    console.log(obj);
    console.log(``, Object.getOwnPropertySymbols(obj), `\n`, obj[Object.getOwnPropertySymbols(obj)[2]]);

}

if (0) {
    const myAwesomeDB = {
        movies: [],
        actors: [],
        [Symbol.for(`id`)]: 12773,
        [Symbol.for(`id1`)]: 123
    }


    // third party code

    myAwesomeDB.id = `3333`;

    console.log(myAwesomeDB.id);
    console.log(myAwesomeDB[`id`]);
    console.log(myAwesomeDB[Symbol.for(`id`)]);

    const globeSimbol = Symbol.for('ufff');
    console.log(Symbol.keyFor(globeSimbol));

    const globalSym = Symbol.for('foo'); // Global symbol
    console.log(Symbol.keyFor(globalSym));
    // Expected output: "foo"

}

if (1) {
    const database = {
        name: 'Stan',
        secondName: 'Wolter',
        age: 36,
        profession: `coocker`
    }

    const pinfo = Object.getOwnPropertyDescriptors(database);
    console.log(pinfo);
    console.log(Object.getOwnPropertyDescriptor(database, 'name'));
    Object.defineProperty(database, 'name', { writable: false });
    // database.name = 'Stan1';
    Object.defineProperty(database, `weight`, { writable: true, value: 77 });
    console.log(database.weight);
    console.log(database);
    console.log(Object.getOwnPropertyDescriptor(database, 'weight'));


}