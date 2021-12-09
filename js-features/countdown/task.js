let initialValue = document.getElementById('timer');
initialValue.onclick = function () {
    if (initialValue.textContent > 0) {
        initialValue.textContent -= 1;
    }
    else {
        alert ('Вы победили в конкурсе!')
    }
}
setInterval(initialValue.onclick, 1000);