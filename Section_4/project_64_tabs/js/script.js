window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  let i = 0;
  // tabs.forEach(tab => {
  //   console.log('tabsContent', i, tabsContent[i]);
  //   console.log('Tabs[', i, ']', tabs[i]);
  //   ++i;
  // });

  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none'; //v1.0
      item.classList.add('hide');
      item.classList.remove('show', `fade`);

    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    // tabsContent[i].style.display = 'block'; //v1.0
    tabs[i].classList.add('tabheader__item_active');
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});