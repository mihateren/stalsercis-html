'use strict'

//  Размер изображений слайдереа
if (document.documentElement.clientWidth > 768) {
    $('.manuf__slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2
    });
} else if (document.documentElement.clientWidth > 468) {
    $('.manuf__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    })
} else {
    $('.manuf__slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
    })
}

// Открытие спойлера в каталоге
function addOpenSpoiler(spoilerButtons) {
    for (let i = 0; i < spoilerButtons.length; i++) {
        spoilerButtons[i].addEventListener('click', function(e) {
            e.target.closest('.catalog__item').classList.toggle('catalog__item--active');
        });
    }
}

// навешивание событий на кнопки спойлера
let spoilerButtons = document.querySelectorAll('.catalog__item-img-container');
addOpenSpoiler(spoilerButtons);
spoilerButtons = document.querySelectorAll('.catalog__item-click');
addOpenSpoiler(spoilerButtons);


// Валидный ввод номера телефона
function validInput() {
    let inp = document.getElementById('phone');
    inp.value = '+7(';
}
jQuery(function($) {
    $("input[name=phone]").mask("+7(999) 999-99-99");
});