const swiper = new Swiper('.main-slider', {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  },
});

const burger = document.querySelector('.menu-burger');
const closeMenu = document.querySelector('.header__menu-close');
const menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});