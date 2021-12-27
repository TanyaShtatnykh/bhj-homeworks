const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const allSlides = document.getElementsByClassName('slider__item');
const arrSlides = Array.from(allSlides);

let slideIndex = arrSlides.findIndex((slide) => slide.classList.contains('slider__item_active'));
let slideActive = arrSlides.find((slide) => slide.classList.contains('slider__item_active'));

function changeSlides(slideIndex) {
    slideActive.classList.remove('slider__item_active');
    allSlides.item(slideIndex).classList.add('slider__item_active');
}

next.onclick = function () {
    if (slideIndex === arrSlides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    changeSlides(slideIndex);
}

prev.onclick = function () {
    if (slideIndex < 0) {
        slideIndex === arrSlides.length - 1;
    } else {
        slideIndex--;
    }

    changeSlides(slideIndex);
}