const SwiperAbout = new Swiper(".about-swiper", { // инициализируем слайдер 
    effect: "fade", // 'плавно' скрывает предыдущий слайд 
    navigation: { // стрелки навигации 
        nextEl: ".swiper-button-next", // стрелка левая
        prevEl: ".swiper-button-prev", // стрелка правая 
    },
});


const SwiperHale = new Swiper(".hall-swiper", { // инициализируем слайдер 
    slidesPerView: 2, // показывает 2 слайда на экране
    spaceBetween: 30, // отступы между слайдами
    centeredSlides: true,
    initialSlide: 1, // показ слайда с определённого 
    loop: true, // бесконечно повторение
    speed: 1000, // Продолжительность перехода между слайдами
    navigation: { // стрелки навигации 
        nextEl: ".swiper-button-next", // стрелка левая
        prevEl: ".swiper-button-prev", // стрелка правая 
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


window.onscroll = function showHeader() {

    var header = document.querySelector('header');

    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed')
    } else {
        header.classList.remove('header__fixed')
    }
}