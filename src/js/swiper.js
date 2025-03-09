import { Swiper } from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

let swipers = [];

const addSwiper = (container) => {
  const swiper = new Swiper(container, {
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 16,
    slidesPerView: 'auto',
  });
  swipers.push(swiper);
};

const checkWindowWidth = () => {
  return window.innerWidth < 768;
}

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainers = document.querySelectorAll('.swiper-container');

  const destroySwipers = () => {
    swipers.forEach((swiper) => {
      if (swiper.destroy) {
        swiper.destroy();
      }
    })

    swipers = [];
  }

  const initSwipers = () => {
    swiperContainers.forEach((container) => {
      addSwiper(container);
    })
  }

  if (checkWindowWidth()) {
    initSwipers();
  }

  window.addEventListener('resize', () => {
    if (swipers.length === 0 && checkWindowWidth()) {
      initSwipers();
    } else if (swipers.length > 0 && !checkWindowWidth()) {
      destroySwipers();
    }
  })
});
