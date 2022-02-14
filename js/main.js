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
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

buttonModal.addEventListener('click', () => {
  modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
  const isMOdal = e.target.closest('.modal__inner');

  if (!isMOdal) {
    modalWindow.classList.remove('active');
  }
});