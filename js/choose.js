// "use strict";
let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setChoice);

function setChoice() {
  let myChoice = select.value;

  switch (myChoice) {
    case 'one':
      para.textContent = 'Отличный выбор, иди в жопу!';
      break;
    case 'two':
      para.textContent = 'Вот это да, иди в пень!';
      break;
    case 'three':
      para.textContent = 'А ты хорош!, иди на хер!';
      break;
    default: 
      para.textContent = 'слабак'
  }
}

//   if (myChoice === "one") {
//     para.textContent = 'Отличный выбор, идите в жопу!';
//   } else if (myChoice === "two") {
//     para.textContent = 'Вот это да, иди в пень!';
//   } else if (myChoice === "three") {
//     para.textContent = 'А ты хорош!, иди на хер!';
//   } else {
//     para.textContent = 'oo0oo';
//   }
// }