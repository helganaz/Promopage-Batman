const swiper = new Swiper('.main__slider', {
    spaceBetween: 30,
    loop: true,

    navigation: {
    nextEl: '.main__slider-arrow',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,  
        },
        768: {
          slidesPerView: 2,  
        }
    }
});
