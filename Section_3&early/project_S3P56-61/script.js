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

if (0) {

    const wifeBirthday = Symbol(`wifeBirthday`);
    const database = {
        name: 'Stan',
        secondName: 'Wolter',
        [wifeBirthday]: `20/12/1984`,
        age: 36,
        profession: `coocker`,
        getInfo: function () {
            return `${this.name} is ${this.profession} ${this.age} years old\nand his weight is  ${this.weight ?? `no info`} kg.`;
        }
    }
    const pinfo = Object.getOwnPropertyDescriptors(database);
    console.log(pinfo);
    console.log(Object.getOwnPropertyDescriptor(database, 'name'));
    Object.defineProperty(database, 'name', { writable: false });
    // database.name = 'Stan1';
    Object.defineProperty(database, `weight`, { writable: true, value: 77 });
    console.log(database);
    console.log(Object.getOwnPropertyDescriptor(database, 'weight'));
    console.log(`getInfo`, database.getInfo());

    //--
    Object.defineProperty(database, `birthday`, { value: `16.12.1984`, enumerable: true, configurable: true });
    console.log(Object.getOwnPropertyDescriptor(database, 'birthday'), `->`, database.birthday, `<-`);
    //enumerable
    Object.defineProperty(database, `getInfo`, { enumerable: false });

    console.log(`--- For cycle ---`);
    for (let i in database) console.log(i, `->`, database[i]);
    console.log(Object.getOwnPropertyDescriptor(database, wifeBirthday));
    // configurable
    Object.defineProperties(database, {
        // We can define propertie `name` only once. Cos we prop `configurable` is false.
        name: { value: `Stan`, enumerable: true, configurable: false }, //
        age: { value: 36, enumerable: true, configurable: true },
        profession: { value: `coocker`, enumerable: true, configurable: true },
        birthday: { value: `16.12.1984`, enumerable: true, configurable: true },
    });

    // Object.defineProperty(database, `name`, { value: 9 });

    if (0) {
        // *** Other methods ***
        Object.seal(database); // Cant config, but writable
        Object.freeze(database); // Cant do anything with object.
        console.log(Object.isExtensible(database));

        const DB = {
            movies: [],
            actors: [],
            [Symbol.for(`id`)]: 12773,
            [Symbol.for(`id1`)]: 123
        }

        console.log(Object.is(database, DB));

        const myObj = { a: 0, b: 1, c: 2, d: `topor` };
        console.log(Object.keys(myObj));
        console.log(Object.values(myObj));
        console.log(Object.values(myObj)[2]);
        console.log(Object.keys(myObj)[`0`]);
        console.log(Object.keys(myObj)[2]);
        console.log(Object.entries(myObj));
        console.log(Object.entries(myObj)[3]);
    }
}


// P58* !For of!
if (0) {
    console.log(`--- For of cycle ---`);


    const arr = [1, 2, 3, 4, 5, 6];
    Array.prototype.someMethod = function () { };
    console.dir(arr);




    // `for Of` gets values from array, but keys like `for if`
    // `for of` doesn't get methods!
    for (let key of arr) console.log(key, `->`, arr[key - 1]);




    // obj is not iterable
    const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, y: 6 };
    console.log(`---is obj iterable ---?\n`, obj);
    const wifeBirthday = Symbol(`wifeBirthday`);
    const database = {
        name: 'Stan',
        secondName: 'Wolter',
        [wifeBirthday]: `20/12/1984`,
        age: 36,
        profession: `coocker`,
        getInfo: function () {
            return `${this.name} is ${this.profession} ${this.age} years old\nand his weight is  ${this.weight ?? `no info`} kg.`;
        }
    }

    const salaries = {
        kate: 500,
        Mike: 1000,
        john: 2000,
        jane: 3000,
        getMax: function () {
            console.log(this.jane);
        }
    }
    // works without iterator
    let i = 0;
    while (Object.values(salaries)[i] !== undefined) {
        console.log(Object.values(salaries)[i++]);
    }

    //default iterator
    salaries[Symbol.iterator] = function () {
        let i = 0;
        return {
            next: function () {
                if (Object.values(salaries) !== undefined && typeof (Object.values(salaries)[i]) !== `function`) {
                    return {
                        value: Object.values(salaries)[i++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }

    for (let key of salaries) {
        console.log(`->`, key);
    }

    //manually call next()
    const iterator = salaries[Symbol.iterator]();
    console.log(`manually call next():`, iterator.next().value);
}

// P59* Map
if (0) {
    let map = new Map();

    map.set("1", "str1");    // строка в качестве ключа
    map.set(1, "num1");      // цифра как ключ
    map.set(true, "bool1");  // булево значение как ключ

    // помните, обычный объект Object приводит ключи к строкам?
    // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
    console.log(map.get(1)); // "num1"
    console.log(map.get("1")); // "str1"

    let john = { name: "John" };

    // давайте сохраним количество посещений для каждого пользователя
    let visitsCountMap = new Map();

    // объект john - это ключ для значения в объекте Map
    visitsCountMap.set(john, 123);
    console.log(visitsCountMap.get(john)); // 123

    let obj = {
        name: "John",
        age: 30
    };
    let map1 = new Map(Object.entries(obj));
    console.log(map1.get('name')); // John

    let obj1 = Object.fromEntries(map1.entries());
    console.log(obj1.name); // John

    map.forEach((value, key, map) => {
        console.log(key, value);
        // console.log(map);
    })

}

if (0) {
    const bigint = 1234567890123456789012345678901234567890n;
    const sameBigint = BigInt(123456789012345678901234567890);
    console.log(typeof bigint);
    console.log(typeof sameBigint);
    console.log(`bigInt compression`, bigint > sameBigint);

    const bigint1 = 2n;
    const num = 3;
    console.log(Number(bigint1) + num);
    console.log(bigint1 + BigInt(num));
    console.log(bigint, `\n`, sameBigint);

}

if (0) {
    function amountOfPages(summary) {
        let sumP = 0;
        let pages = 0;
        for (; pages < summary; ++pages) {
            if (sumP == summary) return pages;
            sumP += String(pages + 1).length;
        }
        return pages;
    }

    console.log(amountOfPages(5));
    console.log(amountOfPages(25));
    console.log(amountOfPages(1095));
}
if (0) {
    // Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
    // Это должно экономить ресурсы компьютера
    //
    function isPangram(string) {
        string = string.toLowerCase();
        return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
            return string.indexOf(x) !== -1;
        });
    }
    console.log(isPangram(`The quick brown fox jumps over the lazy dog`));
    console.log(isPangram(`The quick brown fox jumps over the lazy do`));

    function isPan(str) {

        //--1--
        // return abc.split(``).every((x) => {
        //     return str.indexOf(x) !== -1;
        // });
        //--2--
        // let flag = true;
        // abc.split(``).forEach(function (x) {
        //     if (str.indexOf(x) == -1) {
        //         flag = false;
        //     }
        // });
        // return flag;
        //--3--
        str = str.toLowerCase();
        const abc = `abcdefghijklmnopqrstuvwxyz`;

        return !abc.split(``).some((x) => {
            return str.indexOf(x) == -1;
        });
    }

    const abc = `abcdefghijklmnopqrstuvwxyz`;
    console.log(`2:`, isPan(`The quick brown fox jumps over the lazy dog`));
    console.log(`2:`, isPan(`The quick brown fox jumps over the lazy do`));
    console.log(`test:`, `qwerty`.split('').some((x) => { return x == `y`; }));

}

if (1) {
    function deepCount(a) {
        let count = a.length;
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i]) === true) {
                count += deepCount(a[i]);
            }
        }
        return count;
    }

    console.log(`"1", 5, "3", ["10, 11, "12"]: `, deepCount(["1", "5", "3", ["10", "11", 1, [`aa`]]]));

}