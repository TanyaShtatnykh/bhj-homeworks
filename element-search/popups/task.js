const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

const btnDoIt = document.querySelectorAll('.btn');

btnDoIt.item(0).onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

const closeModal = document.querySelectorAll('.modal__close_times');

closeModal.forEach(function (item) {
    item.onclick = function () {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    };
});
