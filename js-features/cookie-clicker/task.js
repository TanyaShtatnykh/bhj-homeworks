let cookieSize = document.getElementById('cookie');
let clickCount = document.getElementById('clicker__counter');
cookieSize.onclick = function () {
    clickCount.textContent ++;
    if (clickCount.textContent % 2 != 0) {
        cookieSize.width = 400;
    } else {
        cookieSize.width = 200;
    }
}