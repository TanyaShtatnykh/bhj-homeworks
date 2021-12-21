const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach (function (item) {
    item.onclick = function (event) {
        const menuSub = Array.from(item.closest('.menu__item').querySelectorAll('.menu_sub'));
        menuSub.forEach (function (i) {
            if (i) {
                i.classList.toggle('menu_active');
                event.preventDefault();
            } 
        });

        if (item.closest('ul.menu_sub')) {
            return false;
        }
    }
});
