let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// кнопка вниз

let downButton = document.querySelector('.scroll-btn--down');
let sectionAbout =  document.querySelector('.section');

downButton.onclick = function () {
  sectionAbout.scrollIntoView(top)
};

// меню

let menuButton = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');

menuButton.onclick = function () {
  menu.classList.toggle('open');
  menuButton.classList.toggle('open');
};

// кнопка наверх

let upButton = document.querySelector('.scroll-btn--up');

window.onscroll = function () {
  if (window.pageYOffset > 400) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

//микситап

var mixer = mixitup('.menu', {
  animation: {
      duration: 10
  }
});