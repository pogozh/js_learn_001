`use strict`;
let p = document.querySelectorAll();
console.log(p);

elems = document.body.childNodes;
console.log(`elems:\n`, elems);

for (node in elems) {
    if (node == "aaa") {
        node = `piu-piu`;
    }
}