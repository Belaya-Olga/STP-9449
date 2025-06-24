import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsSwiper = new Swiper('.reviewsSwiper', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 8,
  grabCursor: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.reviews-swiper-btn-next',
    prevEl: '.reviews-swiper-btn-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
