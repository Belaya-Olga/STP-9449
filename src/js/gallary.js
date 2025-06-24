import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 10,
  grabCursor: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.gallery-swiper-btn-next',
    prevEl: '.gallery-swiper-btn-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
