const swiper = new Swiper(".about-swiper", { // инициализируем слайдер 
    effect: "fade", // 'плавно' скрывает предыдущий слайд 
    navigation: { // стрелки навигации 
        nextEl: ".swiper-button-next", // стрелка левая
        prevEl: ".swiper-button-prev", // стрелка правая 
    },
});