const SwiperAbout = new Swiper(".about-swiper", { 
    effect: "fade", 
    navigation: { 
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    },
});


const SwiperHale = new Swiper(".hall-swiper", { 
    slidesPerView: 1,
    breakpoints: { 
        990: {
            slidesPerView: 2, 
            spaceBetween: 30, 
            centeredSlides: true,
            initialSlide: 1, 
            loop: true, 
            speed: 1000, 
            navigation: { 
                nextEl: ".swiper-button-next", 
                prevEl: ".swiper-button-prev", 
            },
            pagination: {
                el: ".swiper-pagination",
            },
        },

    }

});


window.onscroll = function showHeader() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed')
    } else {
        header.classList.remove('header__fixed')
    }
}

$(".menu-link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("menu-link__active");
    $("#nav").toggleClass("active");
});


const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);


const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('#check', [

    {
      rule: 'required',
      value: true,
      errorMessage: 'Поставте галочку'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
