let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let downButton = document.querySelector('.header__down-btn');
let sectionAbout =  document.querySelector('.section');

downButton.onclick = function () {
  sectionAbout.scrollIntoView(top)
};

let menuButton = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');

menuButton.onclick = function () {
  menu.classList.toggle('open');
};



var mixer = mixitup('.menu');