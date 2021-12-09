let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

function getHole (index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    let holeClick = getHole(i);
    
    function gameOver() {
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
    }

    holeClick.onclick = function () {
        if (holeClick.className.includes('hole_has-mole')) {
            deadCounter.textContent++;
        } else {
            lostCounter.textContent++;
        }

        if (+deadCounter.textContent === 10) {
            alert('Вы победили!');
            gameOver();
        } else if (+lostCounter.textContent === 5) {
            alert('Вы проиграли!');
            gameOver();
        }
    }  
}