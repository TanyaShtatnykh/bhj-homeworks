const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach (function (item) {
    item.onclick = function () {
        const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
        const menuSubOpen = item.closest('.menu__item').querySelector('.menu_active');

        if (menuSubOpen === null) {
            menuSub.classList.add('menu_active');
            return false;
        } else if (menuSubOpen !== null) {
            if (menuSub === menuSubOpen) {
                menuSub.classList.remove('menu_active');
                return false;
            } else if (menuSub !== menuSubOpen) {
                menuSubOpen.classList.remove('menu_active');
                menuSub.classList.add('menu_active');
                return false;
            }
        }
    }
});
