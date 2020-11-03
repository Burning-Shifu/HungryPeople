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

var mixer = mixitup('.menu');