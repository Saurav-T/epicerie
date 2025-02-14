var swiper = new Swiper('.home', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

