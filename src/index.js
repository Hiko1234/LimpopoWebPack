// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
import { Elements } from "./scripts/modules/elements";

// Import methods
import { includeHTML } from "./scripts/methods/_includeComponents";

// burger

const navBtn = document.querySelector('.header__nav_burger');
const navBurger = document.querySelector('.header__navigation');

navBtn.addEventListener('click', function () {
    navBurger.classList.toggle('active');
    navBtn.classList.toggle('burger-close')
})

// ------------------

const mainSwiper = new Swiper('.main__content_swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const sponsorsSwiper = new Swiper('.sponsors__swiper', {
    loop: true,
    slidesPerView: 1.8,
    spaceBetween: 100,
    speed: 1000,
    parallax: true,
    navigation: {
      nextEl: '.sponsors__arrows_next',
      prevEl: '.sponsors__arrows_prev',
    },
    
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      479: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.2,
      },
      900: {
        slidesPerView: 1.3,
      },
      1024: {
        slidesPerView: 1.5,
      },
      1400: {
        slidesPerView: 1.8,
      },
    },
  });

  const animalsSwiper = new Swiper('.animals__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 27,
    speed: 1000,
    navigation: {
      nextEl: '.animals__arrows_next',
      prevEl: '.animals__arrows_prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        parallax: true,
      },
      479: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2,
        parallax: false,
      },
      800: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  const newsSwiper = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 4.1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    navigation: {
      nextEl: '.news__arrows_next',
      prevEl: '.news__arrows_prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        parallax: true,
        
      },
      600: {
        slidesPerView: 1.5,
      },
      800: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 3.5,
      },
      1700: {
        slidesPerView: 4.1,
      },
    },
  });

  // tabs

  const TABS = document.querySelectorAll('.animals__tab');
  const CONTENT = document.querySelectorAll('.animals__swiper');
  
  TABS.forEach((tab) => {
    tab.addEventListener('click', () => {
      TABS.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      const DATA_ATTRIBUTE = tab.getAttribute('data-animals');
      CONTENT.forEach((item) => {
        item.classList.add('d-none');
        if(item.getAttribute('data-animals') == DATA_ATTRIBUTE){
          item.classList.remove('d-none');
        }
      });
    })
  });

  // ----------------------