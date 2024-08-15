//slider

const swiper = new Swiper('.swiper', {
  slidesPerView: '4.3',
  loop: true,
  spaceBetween: 17,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.reasons__slider-btn-next',
    prevEl: '.reasons__slider-btn-prev',
  },

  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 4.3,
    },
  },
});

// burger

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
});

// pop-up
const openPopUp = document.querySelectorAll('[data-popup]');
const popUp = document.querySelector('#pop-up');

openPopUp.forEach((button) => {
  button.addEventListener('click', () => {
    popUp.style.display = 'flex';
  });
});

const closePopUp = document.querySelector('.pop-up__close');

closePopUp.addEventListener('click', () => {
  popUp.style.display = 'none';
});

// AOS
AOS.init();
