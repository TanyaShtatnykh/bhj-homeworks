const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const arrSlides = Array.from(document.getElementsByClassName('slider__item'));

function changeSlides (slideIndex) { 
    if (slideIndex < 0) {
        slideIndex = arrSlides.length - 1;
    } else if (slideIndex >= arrSlides.length) {
        slideIndex = 0;
    }

    arrSlides.forEach(function (item) {
        item.classList.remove('slider__item_active');
    });

    arrSlides[slideIndex].classList.add('slider__item_active');
    
}

next.onclick = function () {
    slideIndex = arrSlides.findIndex((slide) => slide.classList.contains('slider__item_active'));
    slideIndex += 1;
    changeSlides(slideIndex);
}

prev.onclick = function () {
    slideIndex = arrSlides.findIndex((slide) => slide.classList.contains('slider__item_active'));
    slideIndex -= 1;
    changeSlides(slideIndex);
}