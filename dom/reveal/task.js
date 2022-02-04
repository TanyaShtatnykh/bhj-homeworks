window.addEventListener('scroll', showElem);

const elements = [...document.querySelectorAll('.reveal')];

function showElem () {
    let viewportHeight = window.innerHeight;

    elements.forEach((elem) => {
        let elTop = elem.getBoundingClientRect().top;

        if (elTop < viewportHeight && elTop > 0) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
    });
}