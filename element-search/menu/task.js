const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach (function (item) {
    item.onclick = function () {
        const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
        if (menuSub) {
            if (!menuSub.classList.contains('menu_active')) {
                const menuSubOpen = item.closest('.menu_main').querySelector('.menu_active');
                if (menuSubOpen) {
                    menuSubOpen.classList.remove('menu_active');
                }

                menuSub.classList.add('menu_active');
            } else {
                menuSub.classList.remove('menu_active');
            }
            return false
        }
    }
});