const cases = [...document.querySelectorAll('.rotator__case')];

function casesToggle() {
    for (let i = 0; i < cases.length; i++) {
        if (cases[i].classList.contains('rotator__case_active')) {
            cases[i].classList.toggle('rotator__case_active');
            if (i === cases.length - 1) {
                cases[0].classList.toggle('rotator__case_active');
            } else {
                cases[++i].classList.toggle('rotator__case_active');
            }
        }
    }
}


setInterval(casesToggle, 1000);