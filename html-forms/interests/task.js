const interests = document.querySelectorAll('.interest__check');

interests.forEach((check) => {
    check.addEventListener('click', (e) => {
        const parentBox = check.closest('.interest');
        const childBox = parentBox.querySelectorAll('.interest__check');

        childBox.forEach((childCheck) => {
            childCheck.checked = check.checked;
        });
    });
});