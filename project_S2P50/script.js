`use strict`;
elems = document.body.childNodes;
console.log(elems);
for (node in elems) {
    if (node == "aaa") {
        node = `piu-piu`;
    }
}