const tab = [...document.querySelectorAll('.tab')];
const content = [...document.querySelectorAll('.tab__content')];

tab.forEach(function (item) {
    item.addEventListener('click', tabToggle);

    function tabToggle () {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        this.classList.add('tab_active');
        content[tab.indexOf(this)].classList.add('tab__content_active');
    }
})

