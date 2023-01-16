"use strict";

// 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentElement);
// console.log(`------------------\n`);
// console.log(document.querySelector(`[data-current="3"]`).nextElementSibling);

for (let  node of document.body.childNodes ) {
    if (node.nodeName == `#text`) {
        continue;
    }
    console.log(node);
}