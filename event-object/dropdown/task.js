const menuItem = [...document.querySelectorAll('.dropdown__link')];
const menuList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.addEventListener('click', menuOpen);

function menuOpen (e) {
    if (menuList) {
        menuList.classList.toggle('dropdown__list_active');
    }
    e.preventDefault();
}

menuItem.forEach(function (item) {             
    item.addEventListener('click', menuClick); 
    
    function menuClick (event) {               
        if (menuList.classList.contains('dropdown__list_active')) {
            menuList.classList.remove('dropdown__list_active')
            dropdownValue.textContent = item.textContent;
            event.preventDefault();
        }
    }
});