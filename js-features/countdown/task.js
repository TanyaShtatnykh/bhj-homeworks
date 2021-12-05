let initialValue = document.getElementById('timer');
initialValue.oneclick = function () {
    if (initialValue.textContent > 0) {
        initialValue.textContent -= 1;
    }
    else {
        alert ('Вы победили в конкурсе!')
    }
}
setInterval(initialValue.oneclick, 1000);