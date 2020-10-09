//ALL_SCRIPTS
'use strict'
@@include("modules.js")
@@include("plugins.js")

window.addEventListener('DOMContentLoaded', () => {
   placeholders();
   const reviewSlider = new Swiper('._customer-reviews__container', {
      speed: 400,
      loop: true,
      navigation: {
         nextEl: '._customer-reviews__slider-button--next',
         prevEl: '._customer-reviews__slider-button--prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         680: {
            slidesPerView: 2,
            spaceBetween: 30
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 30
         }
      }
   });
   const clientsSlider = new Swiper('._customer-clients__container', {
      speed: 400,
      loop: true,
      navigation: {
         nextEl: '._customer-clients__button--prev',
         prevEl: '._customer-clients__button--next',
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         520: {
            slidesPerView: 2,
         },
         692: {
            slidesPerView: 3,
         },
         868: {
            slidesPerView: 4,
         },
         1030: {
            slidesPerView: 5,
         }
      }
   });
   setTimeout(() => {
      headerAnim()
   }, 200);
})
