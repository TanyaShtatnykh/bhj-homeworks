const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const allSlides = Array.from(document.querySelectorAll('slider__item'));

let slideNumber = 0;

function changeSlides () {
    allSlides.forEach(function (item) {
        if (item.classList.contains('slider__item_active')) {
            item.classList.remove('slider__item_active');
        }
        else {
            item.classList.add('slider__item_active');
        }
    })
}

next.onclick = function () {
    if (slideNumber < allSlides.length - 1) {
        slideNumber++;
    } else if (slideNumber === allSlides.length - 1) {
        slideNumber = 0;
    }
    changeSlides ();
}

prev.onclick = function () {
    if (slideNumber === 0) {
        slideNumber = allSlides.length - 1;
    } else {
        slideNumber --;
    }
    changeSlides ();
}